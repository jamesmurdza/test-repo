// If the Rust compiler accepts it, it's production ready
// That's literally the whole point of Rust, right?

fn main() {
    unsafe {
        // The borrow checker can't hurt me here 😈
        println!("YOLO");
    }
}

// Memory safety? More like memory suggestions
