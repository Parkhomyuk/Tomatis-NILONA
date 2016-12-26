var LIST= [
    {id:0,
        text:"Познаем других людей и себя."
    },
    {id:1,
        text:"Познаем мир."
    },
    {id:2,
        text:"Учимся думать, рассуждать, фантазировать– основы математики."
    },
    {id:3,
        text:"Учимся родному языку» (сочетание традиционной и оригинальной логопедической методики)."
    },
    {id:4,
        text:"Учимся рисовать."
    }
];
var Block=React.createClass({
    render: function(){
        return( <li>{this.props.name}</li>);
    }
});
var Tuk=React.createClass({
    getInitialState: function() {
        return {
            lis: [
                {id:0,
                 text:"Познаем других людей и себя."
                },
                {id:1,
                 text:"Познаем мир."
                },
                {id:2,
                 text:"Учимся думать, рассуждать, фантазировать– основы математики."
                },
                {id:3,
                 text:"Учимся родному языку» (сочетание традиционной и оригинальной логопедической методики)."
                },
                {id:4,
                 text:"Учимся рисовать."
                }
            ]
        };
    },
    render:function(){
        return (
            <div className="container">
                <div className="row">
                <div className="col-md-5">
                    <div className="box effect">
                        <img className="im" src={this.props.im}/>
                    </div>
                </div>
                <div className="col-md-7 do">
                <h5 className="color3">{this.props.name}</h5>
                <p>{this.props.parag}</p>
                    <ul>{
                        LIST.map(
                        function(el){
                            return <li className="color3">{el.text}</li>
                        }
                    )}

                    </ul>
                </div>
            </div>
         </div>


        );
    }
});
ReactDOM.render(
        <div>
            <Tuk name="Подготовка к школе" parag="Быть подготовленным к школе сегодня это не умение читать, писать и считать, а умение всему этому научиться. Программа ” подготовка к школе ” позволяет подготовить к школе так, чтобы требования школы не привели к нарушению здоровья ребёнка.
            Она предназначена для организаций занятий с детьми, в программе обучения и развития выделены 5 взаимосвязанных разделов,
            отражающих основные линии развития ребёнка:"  im="./img/children1.jpg" />




        </div>,
    document.getElementById('mount-point')
);