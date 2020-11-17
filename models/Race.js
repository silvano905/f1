const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RaceSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId
    },
    race_date: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    race_name: {
        type: String,
        required: true
    },
    money: {
        type: String,
        required: true
    },
    uuid: {
        type: String,
    },
    race_results:
        {
            p_1: {
                driver: {
                    type: String
                },
                position: {
                    type: String
                }
            },
            p_2: {
                driver: {
                    type: String
                },
                position: {
                    type: String
                }
            },
            p_3: {
                driver: {
                    type: String
                },
                position: {
                    type: String
                }
            },
            p_4: {
                driver: {
                    type: String
                },
                position: {
                    type: String
                }
            },
            p_5: {
                driver: {
                    type: String
                },
                position: {
                    type: String
                }
            },
            p_6: {
                driver: {
                    type: String
                },
                position: {
                    type: String
                }
            },
            p_7: {
                driver: {
                    type: String
                },
                position: {
                    type: String
                }
            },
            p_8: {
                driver: {
                    type: String
                },
                position: {
                    type: String
                }
            },
            p_9: {
                driver: {
                    type: String
                },
                position: {
                    type: String
                }
            },
            p_10: {
                driver: {
                    type: String
                },
                position: {
                    type: String
                }
            },
            p_11: {
                driver: {
                    type: String
                },
                position: {
                    type: String
                }
            },
            p_12: {
                driver: {
                    type: String
                },
                position: {
                    type: String
                }
            },
            p_13: {
                driver: {
                    type: String
                },
                position: {
                    type: String
                }
            },
            p_14: {
                driver: {
                    type: String
                },
                position: {
                    type: String
                }
            },
            p_15: {
                driver: {
                    type: String
                },
                position: {
                    type: String
                }
            },
            p_16: {
                driver: {
                    type: String
                },
                position: {
                    type: String
                }
            },
            p_17: {
                driver: {
                    type: String
                },
                position: {
                    type: String
                }
            },
            p_18: {
                driver: {
                    type: String
                },
                position: {
                    type: String
                }
            },
            p_19: {
                driver: {
                    type: String
                },
                position: {
                    type: String
                }
            },
            p_20: {
                driver: {
                    type: String
                },
                position: {
                    type: String
                }
            },
            race_over: {
                type: Boolean,
                default: false
            },
            close: {
                type: Boolean,
                default: false
            },
            edit: {
                type: Boolean,
                default: false
            },
        }
    ,
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('race', RaceSchema);