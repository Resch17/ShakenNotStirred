USE [master]
GO

IF db_id('ShakenNotStirred') IS NULL
	CREATE DATABASE [ShakenNotStirred]
GO

DROP TABLE IF EXISTS [ActorMovieImage];
DROP TABLE IF EXISTS [MovieImage];
DROP TABLE IF EXISTS [ActorMovie];
DROP TABLE IF EXISTS [Actor];
DROP TABLE IF EXISTS [Role];
DROP TABLE IF EXISTS [Image];
DROP TABLE IF EXISTS [Movie];

CREATE TABLE [Movie]
(
    [Id] integer PRIMARY KEY NOT NULL,
    [Year] integer NOT NULL,
    [Title] nvarchar(255) NOT NULL,
    [Description] nvarchar(MAX),
    [Director] nvarchar(255),
    [Writer] nvarchar(255)
)
GO

CREATE TABLE [Actor]
(
    [Id] integer PRIMARY KEY NOT NULL,
    [FirstName] nvarchar(255) NOT NULL,
    [LastName] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [Image]
(
    [Id] integer PRIMARY KEY NOT NULL,
    [Path] nvarchar(255) NOT NULL,
    [Alt] nvarchar(255)
)
GO

CREATE TABLE [Role]
(
    [Id] integer PRIMARY KEY NOT NULL,
    [Name] integer NOT NULL
)
GO

CREATE TABLE [ActorMovie]
(
    [Id] integer PRIMARY KEY NOT NULL,
    [ActorId] integer NOT NULL,
    [MovieId] integer NOT NULL,
    [RoleId] integer NOT NULL,
    [CharacterFirst] nvarchar(255),
    [CharacterLast] nvarchar(255) NOT NULL,
    [IsAlive] bit NOT NULL DEFAULT 1
)
GO

CREATE TABLE [ActorMovieImage]
(
    [Id] integer PRIMARY KEY NOT NULL,
    [ActorMovieId] integer NOT NULL,
    [ImageId] integer NOT NULL
)
GO

CREATE TABLE [MovieImage]
(
    [Id] integer PRIMARY KEY NOT NULL,
    [MovieId] integer NOT NULL,
    [ImageId] integer NOT NULL,
    [IsPoster] bit NOT NULL DEFAULT 0
)
GO

ALTER TABLE [ActorMovie] ADD FOREIGN KEY ([RoleId]) REFERENCES [Role] ([Id])
GO

ALTER TABLE [ActorMovie] ADD FOREIGN KEY ([ActorId]) REFERENCES [Actor] ([Id])
GO

ALTER TABLE [MovieImage] ADD FOREIGN KEY ([MovieId]) REFERENCES [Movie] ([Id])
GO

ALTER TABLE [MovieImage] ADD FOREIGN KEY ([ImageId]) REFERENCES [Image] ([Id])
GO

ALTER TABLE [ActorMovie] ADD FOREIGN KEY ([MovieId]) REFERENCES [Movie] ([Id])
GO

ALTER TABLE [ActorMovieImage] ADD FOREIGN KEY ([ActorMovieId]) REFERENCES [ActorMovie] ([Id])
GO

ALTER TABLE [ActorMovieImage] ADD FOREIGN KEY ([ImageId]) REFERENCES [Image] ([Id])
GO
