import Vapor

public func configure(_ config: inout Config, _ env: inout Environment, _ services: inout Services) throws {
    
    // Register routes to the router
    let router = EngineRouter.default()
    try routes(router)
    services.register(router, as: Router.self)
    
    // Register middleware
    var middlewares = MiddlewareConfig()
    middlewares.use(ErrorMiddleware.self)
    
    // Static Files
    services.register(StaticFilesMiddleware.self)
    middlewares.use(StaticFilesMiddleware.self)

    // CORS
    let corsConfiguration = CORSMiddleware.Configuration(
        allowedOrigin: .all,
        allowedMethods: [.GET, .POST, .PUT, .OPTIONS, .DELETE, .PATCH],
        allowedHeaders: [.accept, .authorization, .contentType, .origin, .xRequestedWith, .userAgent, .accessControlAllowOrigin]
    )
    let corsMiddleware = CORSMiddleware(configuration: corsConfiguration)
    middlewares.use(corsMiddleware)
    
    // Secure Middleware
    services.register(SecureMiddleware.self)
    middlewares.use(SecureMiddleware.self)
    
    // Register All middleware
    services.register(middlewares)
    
    // Web Socket Server
    let wss = NIOWebSocketServer.default()
    handleWebSockets(wss)
    services.register(wss, as: WebSocketServer.self)
}

