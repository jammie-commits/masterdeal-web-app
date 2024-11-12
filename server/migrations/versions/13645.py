"""Initial migration"""

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql


# revision identifiers, used by Alembic.
revision = '1364596046'  # Auto-generated revision ID
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # Commands to create tables
    op.create_table(
        'users',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('username', sa.String(length=100), nullable=False),
        sa.Column('email', sa.String(length=100), nullable=False),
        sa.Column('password', sa.String(length=255), nullable=False),
        sa.Column('is_admin', sa.Boolean(), nullable=True),
        sa.PrimaryKeyConstraint('id'),
        sa.UniqueConstraint('email'),
        sa.UniqueConstraint('username')
    )
    
    op.create_table(
        'properties',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('title', sa.String(length=100), nullable=False),
        sa.Column('price', sa.Float(), nullable=False),
        sa.Column('description', sa.String(length=500), nullable=False),
        sa.Column('features', sa.String(length=500), nullable=True),
        sa.PrimaryKeyConstraint('id')
    )
    
    op.create_table(
        'services',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('title', sa.String(length=100), nullable=False),
        sa.Column('sub_title', sa.String(length=250), nullable=False),
        sa.PrimaryKeyConstraint('id')
    )
    
    op.create_table(
        'testimonials',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('user_name', sa.String(length=100), nullable=False),
        sa.Column('destination_title', sa.String(length=100), nullable=True),
        sa.Column('rating', sa.Float(), nullable=False),
        sa.Column('comments', sa.Text(), nullable=False),
        sa.PrimaryKeyConstraint('id')
    )
    
    op.create_table(
        'contact_messages',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('name', sa.String(length=100), nullable=False),
        sa.Column('email', sa.String(length=100), nullable=False),
        sa.Column('message', sa.Text(), nullable=False),
        sa.PrimaryKeyConstraint('id')
    )

    op.create_table(
        'diaspora_guide',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('title', sa.String(length=255), nullable=False),
        sa.Column('content', sa.Text(), nullable=False),
        sa.Column('contact_email', sa.String(length=100), nullable=False),
        sa.Column('contact_phone', sa.String(length=50), nullable=False),
        sa.Column('contact_whatsapp', sa.String(length=50), nullable=False),
        sa.PrimaryKeyConstraint('id')
    )


def downgrade():
    # Commands to drop tables
    op.drop_table('users')
    op.drop_table('properties')
    op.drop_table('services')
    op.drop_table('testimonials')
    op.drop_table('contact_messages')
    op.drop_table('diaspora_guide')
