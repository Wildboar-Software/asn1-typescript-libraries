/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    FileIdentifier,
    _decode_FileIdentifier,
    _encode_FileIdentifier,
} from '../IPMSFileTransferBodyPartType/FileIdentifier.ta.mjs';
import {
    Relationship,
    _decode_Relationship,
    _encode_Relationship,
} from '../IPMSFileTransferBodyPartType/Relationship.ta.mjs';
import {
    ExplicitRelationship_unspecified,
} from './ExplicitRelationship.ta.mjs';

/**
 * @summary RelatedStoredFile_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelatedStoredFile-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class RelatedStoredFile_Item {
    constructor(
        /**
         * @summary `file_identifier`.
         * @public
         * @readonly
         */
        readonly file_identifier: FileIdentifier,
        /**
         * @summary `relationship`.
         * @public
         * @readonly
         */
        readonly relationship: OPTIONAL<Relationship>
    ) {}

    /**
     * @summary Restructures an object into a RelatedStoredFile_Item
     * @description
     *
     * This takes an `object` and converts it to a `RelatedStoredFile_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RelatedStoredFile_Item`.
     * @returns {RelatedStoredFile_Item}
     */
    public static _from_object(
        _o: { [_K in keyof RelatedStoredFile_Item]: RelatedStoredFile_Item[_K] }
    ): RelatedStoredFile_Item {
        return new RelatedStoredFile_Item(_o.file_identifier, _o.relationship);
    }

    /**
     * @summary Getter that returns the default value for `relationship`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_relationship() {
        return { explicit_relationship: ExplicitRelationship_unspecified };
    }
}

/**
 * @summary The Leading Root Component Types of RelatedStoredFile_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RelatedStoredFile_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'file-identifier',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'relationship',
        true,
        $.hasAnyTag
    ),
];

/**
 * @summary The Trailing Root Component Types of RelatedStoredFile_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RelatedStoredFile_Item: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of RelatedStoredFile_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RelatedStoredFile_Item: $.ComponentSpec[] = [];

let _cached_decoder_for_RelatedStoredFile_Item: $.ASN1Decoder<RelatedStoredFile_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RelatedStoredFile_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelatedStoredFile_Item} The decoded data structure.
 */
export function _decode_RelatedStoredFile_Item(el: _Element) {
    if (!_cached_decoder_for_RelatedStoredFile_Item) {
        _cached_decoder_for_RelatedStoredFile_Item = function (
            el: _Element
        ): RelatedStoredFile_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let file_identifier!: FileIdentifier;
            let relationship: OPTIONAL<Relationship> =
                RelatedStoredFile_Item._default_value_for_relationship;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'file-identifier': (_el: _Element): void => {
                    file_identifier = _decode_FileIdentifier(_el);
                },
                relationship: (_el: _Element): void => {
                    relationship = _decode_Relationship(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RelatedStoredFile_Item,
                _extension_additions_list_spec_for_RelatedStoredFile_Item,
                _root_component_type_list_2_spec_for_RelatedStoredFile_Item,
                undefined
            );
            return new RelatedStoredFile_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
                file_identifier,
                relationship
            );
        };
    }
    return _cached_decoder_for_RelatedStoredFile_Item(el);
}

let _cached_encoder_for_RelatedStoredFile_Item: $.ASN1Encoder<RelatedStoredFile_Item> | null = null;

/**
 * @summary Encodes a(n) RelatedStoredFile_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelatedStoredFile_Item, encoded as an ASN.1 Element.
 */
export function _encode_RelatedStoredFile_Item(
    value: RelatedStoredFile_Item,
    elGetter: $.ASN1Encoder<RelatedStoredFile_Item>
) {
    if (!_cached_encoder_for_RelatedStoredFile_Item) {
        _cached_encoder_for_RelatedStoredFile_Item = function (
            value: RelatedStoredFile_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_FileIdentifier(
                            value.file_identifier,
                            $.BER
                        ),
                        /* IF_DEFAULT */ value.relationship === undefined ||
                        $.deepEq(
                            value.relationship,
                            RelatedStoredFile_Item._default_value_for_relationship
                        )
                            ? undefined
                            : _encode_Relationship(value.relationship, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RelatedStoredFile_Item(value, elGetter);
}


/* eslint-enable */
