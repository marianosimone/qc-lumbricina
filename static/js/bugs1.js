// Guardando solo 3 highscores
snake._max_scores = 3;

// Eliminando el nivel 6
snake._levels.pop()

// Invirtiendo niveles 2 y 3
var level_2 = snake._levels[1];
snake._levels[1] = snake._levels[2];
snake._levels[2] = level_2;

// Haciendo que la roja no te alargue
snake._meal_options.o.reactions = [ function() {snake._increase_points(100);}, function() { snake._generate_meal();}];

// Haciendo que la negra no haga nada
snake._meal_options.t.reactions = [];

// No mostrando el puntaje en pantalla
snake._increase_points = function(quantity) {
        snake._score += quantity;
}

// Matando a la lumbri antes de llegar a los bordes
snake.old_collisions = snake.checkCollisions;
var box_limit = snake._box_size + 2*snake._box_padding;
snake.checkCollisions = function() {
    var head = snake._snake[0];
    if ((head.x == snake._canvas.width-2*box_limit) || (head.x == box_limit) || (head.y == box_limit) || (head.y == snake._canvas.height-2*box_limit)) {
        snake._collision = true;
        return false;
    }
    return snake.old_collisions();
};

