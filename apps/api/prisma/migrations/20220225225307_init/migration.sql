-- CreateTable
CREATE TABLE "restaurants" (
    "id" BIGINT NOT NULL,
    "name" TEXT,
    "rating" BIGINT,
    "guide" TEXT,
    "img" TEXT,
    "link" TEXT,
    "location" TEXT,
    "type" TEXT,
    "lat" DOUBLE PRECISION,
    "long" DOUBLE PRECISION,
    "year" BIGINT,

    CONSTRAINT "restaurants_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ix_restaurants_id" ON "restaurants"("id");
