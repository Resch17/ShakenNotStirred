USE [ShakenNotStirred];
GO

SET IDENTITY_INSERT [Movie] ON
INSERT INTO [Movie]
    ([Id], [Year], [Title], [Description], [Director], [Writer])
VALUES
    (1, 1962, 'Dr. No', 'First Bond movie.', 'Terence Young', 'Maibaum, Harwood, Mather');
INSERT INTO [Movie]
    ([Id], [Year], [Title], [Description], [Director], [Writer])
VALUES
    (2, 1963, 'From Russia With Love', 'Second Bond movie.', 'Terence Young', 'Maibaum');
SET IDENTITY_INSERT [Movie] OFF

SET IDENTITY_INSERT [Image] ON
INSERT INTO [Image]
    ([Id], [Path], [Alt])
VALUES
    (1, 'https://m.media-amazon.com/images/I/91iAhUDWFBL._AC_UY218_.jpg', 'Dr. No Poster');
INSERT INTO [Image]
    ([Id], [Path], [Alt])
VALUES
    (2, 'https://m.media-amazon.com/images/I/91xdVBHJRdL._AC_UY218_.jpg', 'From Russia With Love Poster');
SET IDENTITY_INSERT [Image] OFF

SET IDENTITY_INSERT [MovieImage] ON
INSERT INTO [MovieImage]
    ([Id], [MovieId], [ImageId], [IsPoster])
VALUES
    (1, 1, 1, 1);
INSERT INTO [MovieImage]
    ([Id], [MovieId], [ImageId], [IsPoster])
VALUES
    (2, 2, 2, 1);
SET IDENTITY_INSERT [MovieImage] OFF

SET IDENTITY_INSERT [Role] ON
INSERT INTO [Role]
    ([Id], [Name])
VALUES
    (1, 'James Bond');
INSERT INTO [Role]
    ([Id], [Name])
VALUES
    (2, 'Bond Girl');
INSERT INTO [Role]
    ([Id], [Name])
VALUES
    (3, 'Primary Villain');
INSERT INTO [Role]
    ([Id], [Name])
VALUES
    (4, 'Ally - MI6');
INSERT INTO [Role]
    ([Id], [Name])
VALUES
    (5, 'Ally - Other');
INSERT INTO [Role]
    ([Id], [Name])
VALUES
    (6, 'Henchman');
INSERT INTO [Role]
    ([Id], [Name])
VALUES
    (7, 'Other Love Interest');
INSERT INTO [Role]
    ([Id], [Name])
VALUES
    (8, 'Other');
SET IDENTITY_INSERT [Role] OFF

SET IDENTITY_INSERT [Actor] ON
INSERT INTO [Actor]
    ([Id], [FirstName], [LastName])
VALUES
    (1, 'Sean', 'Connery');
INSERT INTO [Actor]
    ([Id], [FirstName], [LastName])
VALUES
    (2, 'Ursula', 'Andress');
INSERT INTO [Actor]
    ([Id], [FirstName], [LastName])
VALUES
    (3, 'Bernard', 'Lee');
INSERT INTO [Actor]
    ([Id], [FirstName], [LastName])
VALUES
    (4, 'Joseph', 'Wiseman');
INSERT INTO [Actor]
    ([Id], [FirstName], [LastName])
VALUES
    (5, 'Lois', 'Maxwell');
SET IDENTITY_INSERT [Actor] OFF

SET IDENTITY_INSERT [ActorMovie] ON
INSERT INTO [ActorMovie]
    ([Id], [ActorId], [MovieId], [RoleId], [CharacterFirst], [CharacterLast])
VALUES
    (1, 1, 1, 1, 'James', 'Bond');
INSERT INTO [ActorMovie]
    ([Id], [ActorId], [MovieId], [RoleId], [CharacterFirst], [CharacterLast])
VALUES
    (2, 2, 1, 2, 'Honey', 'Ryder');
INSERT INTO [ActorMovie]
    ([Id], [ActorId], [MovieId], [RoleId], [CharacterLast])
VALUES
    (3, 3, 1, 4, 'M');
INSERT INTO [ActorMovie]
    ([Id], [ActorId], [MovieId], [RoleId], [CharacterFirst], [CharacterLast])
VALUES
    (4, 5, 1, 4, 'Miss', 'Moneypenny');
INSERT INTO [ActorMovie]
    ([Id], [ActorId], [MovieId], [RoleId], [CharacterFirst], [CharacterLast])
VALUES
    (5, 4, 1, 3, 'Dr.', 'No');
INSERT INTO [ActorMovie]
    ([Id], [ActorId], [MovieId], [RoleId], [CharacterFirst], [CharacterLast])
VALUES
    (6, 5, 2, 3, 'Miss', 'Moneypenny');
INSERT INTO [ActorMovie]
    ([Id], [ActorId], [MovieId], [RoleId], [CharacterLast])
VALUES
    (7, 3, 2, 4, 'M');
INSERT INTO [ActorMovie]
    ([Id], [ActorId], [MovieId], [RoleId], [CharacterFirst], [CharacterLast])
VALUES
    (8, 1, 2, 1, 'James', 'Bond');
SET IDENTITY_INSERT [ActorMovie] OFF
