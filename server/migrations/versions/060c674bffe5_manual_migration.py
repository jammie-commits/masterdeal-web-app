"""manual migration

Revision ID: 060c674bffe5
Revises: 
Create Date: 2024-11-12 11:38:58.795098

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.engine import reflection


# revision identifiers, used by Alembic.
revision = '060c674bffe5'
down_revision = None
branch_labels = None
depends_on = None

def upgrade():
    # Create the 'properties' table
    op.create_table(
        'properties',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('title', sa.String(length=100), nullable=False),
        sa.Column('price', sa.String(length=50), nullable=False),
        sa.Column('description', sa.Text(), nullable=False),
        sa.Column('features', sa.String(length=250), nullable=True),
        sa.PrimaryKeyConstraint('id')
    )

    # Create the 'services' table
    op.create_table(
        'services',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('title', sa.String(length=100), nullable=False),
        sa.Column('sub_title', sa.String(length=250), nullable=False),
        sa.PrimaryKeyConstraint('id')
    )

    # Create the 'testimonials' table
    op.create_table(
        'testimonials',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('user_name', sa.String(length=100), nullable=False),
        sa.Column('destination_title', sa.String(length=100), nullable=True),
        sa.Column('rating', sa.Float(), nullable=False),
        sa.Column('comments', sa.Text(), nullable=True),
        sa.PrimaryKeyConstraint('id')
    )

    # Create the 'contact_messages' table
    op.create_table(
        'contact_messages',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('name', sa.String(length=100), nullable=False),
        sa.Column('email', sa.String(length=100), nullable=False),
        sa.Column('message', sa.Text(), nullable=False),
        sa.PrimaryKeyConstraint('id')
    )

def downgrade():
    # Drop the 'contact_messages' table
    op.drop_table('contact_messages')

    # Drop the 'testimonials' table
    op.drop_table('testimonials')

    # Drop the 'services' table
    op.drop_table('services')

    # Drop the 'properties' table
    op.drop_table('properties')
