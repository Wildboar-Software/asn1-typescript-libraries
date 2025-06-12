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
    Label,
    _decode_Label,
    _encode_Label,
} from '../MhsMTAAsn1Module/Label.ta.mjs';
export {
    Label,
    _decode_Label,
    _encode_Label,
} from '../MhsMTAAsn1Module/Label.ta.mjs';
import {
    EMailRedirections_address,
    _decode_EMailRedirections_address,
    _encode_EMailRedirections_address,
} from '../MhsMTAAsn1Module/EMailRedirections-address.ta.mjs';
export {
    EMailRedirections_address,
    _decode_EMailRedirections_address,
    _encode_EMailRedirections_address,
} from '../MhsMTAAsn1Module/EMailRedirections-address.ta.mjs';

/* START_OF_SYMBOL_DEFINITION EMailRedirections */
/**
 * @summary EMailRedirections
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EMailRedirections ::= SET {
 *   label    Label,
 *   address  CHOICE {none        NULL,
 *                    email-addr  EMailMtsUserName}
 * }
 * ```
 *
 * @class
 */
export class EMailRedirections {
    constructor(
        /**
         * @summary `label`.
         * @public
         * @readonly
         */
        readonly label: Label,
        /**
         * @summary `address`.
         * @public
         * @readonly
         */
        readonly address: EMailRedirections_address
    ) {}

    /**
     * @summary Restructures an object into a EMailRedirections
     * @description
     *
     * This takes an `object` and converts it to a `EMailRedirections`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EMailRedirections`.
     * @returns {EMailRedirections}
     */
    public static _from_object(
        _o: { [_K in keyof EMailRedirections]: EMailRedirections[_K] }
    ): EMailRedirections {
        return new EMailRedirections(_o.label, _o.address);
    }
}
/* END_OF_SYMBOL_DEFINITION EMailRedirections */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EMailRedirections */
/**
 * @summary The Leading Root Component Types of EMailRedirections
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EMailRedirections: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'label',
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec('address', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EMailRedirections */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EMailRedirections */
/**
 * @summary The Trailing Root Component Types of EMailRedirections
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EMailRedirections: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EMailRedirections */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EMailRedirections */
/**
 * @summary The Extension Addition Component Types of EMailRedirections
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EMailRedirections: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EMailRedirections */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EMailRedirections */
let _cached_decoder_for_EMailRedirections: $.ASN1Decoder<EMailRedirections> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EMailRedirections */

/* START_OF_SYMBOL_DEFINITION _decode_EMailRedirections */
/**
 * @summary Decodes an ASN.1 element into a(n) EMailRedirections
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EMailRedirections} The decoded data structure.
 */
export function _decode_EMailRedirections(el: _Element) {
    if (!_cached_decoder_for_EMailRedirections) {
        _cached_decoder_for_EMailRedirections = function (
            el: _Element
        ): EMailRedirections {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let label!: Label;
            let address!: EMailRedirections_address;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                label: (_el: _Element): void => {
                    label = _decode_Label(_el);
                },
                address: (_el: _Element): void => {
                    address = _decode_EMailRedirections_address(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EMailRedirections,
                _extension_additions_list_spec_for_EMailRedirections,
                _root_component_type_list_2_spec_for_EMailRedirections,
                undefined
            );
            return new EMailRedirections /* SET_CONSTRUCTOR_CALL */(
                label,
                address
            );
        };
    }
    return _cached_decoder_for_EMailRedirections(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EMailRedirections */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EMailRedirections */
let _cached_encoder_for_EMailRedirections: $.ASN1Encoder<EMailRedirections> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EMailRedirections */

/* START_OF_SYMBOL_DEFINITION _encode_EMailRedirections */
/**
 * @summary Encodes a(n) EMailRedirections into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMailRedirections, encoded as an ASN.1 Element.
 */
export function _encode_EMailRedirections(
    value: EMailRedirections,
    elGetter: $.ASN1Encoder<EMailRedirections>
) {
    if (!_cached_encoder_for_EMailRedirections) {
        _cached_encoder_for_EMailRedirections = function (
            value: EMailRedirections,
            elGetter: $.ASN1Encoder<EMailRedirections>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Label(value.label, $.BER),
                        /* REQUIRED   */ _encode_EMailRedirections_address(
                            value.address,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EMailRedirections(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EMailRedirections */

/* eslint-enable */
