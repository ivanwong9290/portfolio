import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { ReactNode } from "react";

interface TabContent {
    id: string,
    label: string,
    content: ReactNode
}

type TabProps = {
    id: string
    contents: TabContent[]
}

const ContentTab = ({ id, contents }: TabProps) => {
    return (
        <div id={id} className="flex w-full flex-col">
            <Tabs items={contents} color={"default"} variant="light" fullWidth>
                {(item) => (
                    <Tab key={item.id} title={item.label}>
                        <Card className="bg-transparent">
                            <CardBody>
                                {item.content}
                            </CardBody>
                        </Card>
                    </Tab>
                )}
            </Tabs>
        </div>
    )
}

export default ContentTab