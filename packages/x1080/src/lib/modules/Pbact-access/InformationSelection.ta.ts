/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
    InformationSelection_attributes,
    _decode_InformationSelection_attributes,
    _encode_InformationSelection_attributes,
} from '../Pbact-access/InformationSelection-attributes.ta.js';
export {
    InformationSelection_attributes,
    _decode_InformationSelection_attributes,
    _encode_InformationSelection_attributes,
} from '../Pbact-access/InformationSelection-attributes.ta.js';
import {
    InformationSelection_infoTypes,
    _enum_for_InformationSelection_infoTypes,
    InformationSelection_infoTypes_attributeTypesOnly /* IMPORTED_LONG_ENUMERATION_ITEM */,
    attributeTypesOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    InformationSelection_infoTypes_attributeTypeAndValue /* IMPORTED_LONG_ENUMERATION_ITEM */,
    attributeTypeAndValue /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_InformationSelection_infoTypes,
    _encode_InformationSelection_infoTypes,
} from '../Pbact-access/InformationSelection-infoTypes.ta.js';
export {
    InformationSelection_infoTypes,
    _enum_for_InformationSelection_infoTypes,
    InformationSelection_infoTypes_attributeTypesOnly /* IMPORTED_LONG_ENUMERATION_ITEM */,
    attributeTypesOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    InformationSelection_infoTypes_attributeTypeAndValue /* IMPORTED_LONG_ENUMERATION_ITEM */,
    attributeTypeAndValue /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_InformationSelection_infoTypes,
    _encode_InformationSelection_infoTypes,
} from '../Pbact-access/InformationSelection-infoTypes.ta.js';

/* START_OF_SYMBOL_DEFINITION InformationSelection */
/**
 * @summary InformationSelection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationSelection ::= SEQUENCE {
 *   attributes      CHOICE {
 *     allAttributes   [0]  NULL,
 *     select          [1]  SEQUENCE SIZE (1..MAX) OF ATTRIBUTE.&id,
 *     ... },
 *   infoTypes        ENUMERATED {
 *     attributeTypesOnly     (0),
 *     attributeTypeAndValue  (1),
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class InformationSelection {
    constructor(
        /**
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: InformationSelection_attributes,
        /**
         * @summary `infoTypes`.
         * @public
         * @readonly
         */
        readonly infoTypes: InformationSelection_infoTypes,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a InformationSelection
     * @description
     *
     * This takes an `object` and converts it to a `InformationSelection`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InformationSelection`.
     * @returns {InformationSelection}
     */
    public static _from_object(
        _o: { [_K in keyof InformationSelection]: InformationSelection[_K] }
    ): InformationSelection {
        return new InformationSelection(
            _o.attributes,
            _o.infoTypes,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `infoTypes`
     * @public
     * @static
     */

    public static _enum_for_infoTypes = _enum_for_InformationSelection_infoTypes;
}
/* END_OF_SYMBOL_DEFINITION InformationSelection */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_InformationSelection */
/**
 * @summary The Leading Root Component Types of InformationSelection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InformationSelection: $.ComponentSpec[] = [
    new $.ComponentSpec('attributes', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'infoTypes',
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_InformationSelection */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_InformationSelection */
/**
 * @summary The Trailing Root Component Types of InformationSelection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InformationSelection: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_InformationSelection */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_InformationSelection */
/**
 * @summary The Extension Addition Component Types of InformationSelection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InformationSelection: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_InformationSelection */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InformationSelection */
let _cached_decoder_for_InformationSelection: $.ASN1Decoder<InformationSelection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InformationSelection */

/* START_OF_SYMBOL_DEFINITION _decode_InformationSelection */
/**
 * @summary Decodes an ASN.1 element into a(n) InformationSelection
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InformationSelection} The decoded data structure.
 */
export function _decode_InformationSelection(el: _Element) {
    if (!_cached_decoder_for_InformationSelection) {
        _cached_decoder_for_InformationSelection = function (
            el: _Element
        ): InformationSelection {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'InformationSelection contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'attributes';
            sequence[1].name = 'infoTypes';
            let attributes!: InformationSelection_attributes;
            let infoTypes!: InformationSelection_infoTypes;
            attributes = _decode_InformationSelection_attributes(sequence[0]);
            infoTypes = _decode_InformationSelection_infoTypes(sequence[1]);
            return new InformationSelection(
                attributes,
                infoTypes,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_InformationSelection(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InformationSelection */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InformationSelection */
let _cached_encoder_for_InformationSelection: $.ASN1Encoder<InformationSelection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InformationSelection */

/* START_OF_SYMBOL_DEFINITION _encode_InformationSelection */
/**
 * @summary Encodes a(n) InformationSelection into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InformationSelection, encoded as an ASN.1 Element.
 */
export function _encode_InformationSelection(
    value: InformationSelection,
    elGetter: $.ASN1Encoder<InformationSelection>
) {
    if (!_cached_encoder_for_InformationSelection) {
        _cached_encoder_for_InformationSelection = function (
            value: InformationSelection,
            elGetter: $.ASN1Encoder<InformationSelection>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InformationSelection_attributes(
                                value.attributes,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_InformationSelection_infoTypes(
                                value.infoTypes,
                                $.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_InformationSelection(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InformationSelection */

/* eslint-enable */
