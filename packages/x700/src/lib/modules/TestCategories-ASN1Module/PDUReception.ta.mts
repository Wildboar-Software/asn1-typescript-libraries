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
    PDUType,
    _decode_PDUType,
    _encode_PDUType,
} from '../TestCategories-ASN1Module/PDUType.ta.mjs';
export {
    PDUType,
    _decode_PDUType,
    _encode_PDUType,
} from '../TestCategories-ASN1Module/PDUType.ta.mjs';
import {
    Parameter,
    _decode_Parameter,
    _encode_Parameter,
} from '../TestCategories-ASN1Module/Parameter.ta.mjs';
export {
    Parameter,
    _decode_Parameter,
    _encode_Parameter,
} from '../TestCategories-ASN1Module/Parameter.ta.mjs';
import {
    ResponseTimeout,
    _decode_ResponseTimeout,
    _encode_ResponseTimeout,
} from '../TestCategories-ASN1Module/ResponseTimeout.ta.mjs';
export {
    ResponseTimeout,
    _decode_ResponseTimeout,
    _encode_ResponseTimeout,
} from '../TestCategories-ASN1Module/ResponseTimeout.ta.mjs';

/* START_OF_SYMBOL_DEFINITION PDUReception */
/**
 * @summary PDUReception
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDUReception ::= SEQUENCE {
 *   pDUType          PDUType,
 *   parameter        Parameter,
 *   responseTimeout  ResponseTimeout OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class PDUReception {
    constructor(
        /**
         * @summary `pDUType`.
         * @public
         * @readonly
         */
        readonly pDUType: PDUType,
        /**
         * @summary `parameter`.
         * @public
         * @readonly
         */
        readonly parameter: Parameter,
        /**
         * @summary `responseTimeout`.
         * @public
         * @readonly
         */
        readonly responseTimeout: OPTIONAL<ResponseTimeout>
    ) {}

    /**
     * @summary Restructures an object into a PDUReception
     * @description
     *
     * This takes an `object` and converts it to a `PDUReception`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PDUReception`.
     * @returns {PDUReception}
     */
    public static _from_object(
        _o: { [_K in keyof PDUReception]: PDUReception[_K] }
    ): PDUReception {
        return new PDUReception(_o.pDUType, _o.parameter, _o.responseTimeout);
    }
}
/* END_OF_SYMBOL_DEFINITION PDUReception */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PDUReception */
/**
 * @summary The Leading Root Component Types of PDUReception
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PDUReception: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'pDUType',
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'parameter',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'responseTimeout',
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PDUReception */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PDUReception */
/**
 * @summary The Trailing Root Component Types of PDUReception
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PDUReception: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PDUReception */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PDUReception */
/**
 * @summary The Extension Addition Component Types of PDUReception
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PDUReception: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PDUReception */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PDUReception */
let _cached_decoder_for_PDUReception: $.ASN1Decoder<PDUReception> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PDUReception */

/* START_OF_SYMBOL_DEFINITION _decode_PDUReception */
/**
 * @summary Decodes an ASN.1 element into a(n) PDUReception
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PDUReception} The decoded data structure.
 */
export function _decode_PDUReception(el: _Element) {
    if (!_cached_decoder_for_PDUReception) {
        _cached_decoder_for_PDUReception = function (
            el: _Element
        ): PDUReception {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let pDUType!: PDUType;
            let parameter!: Parameter;
            let responseTimeout: OPTIONAL<ResponseTimeout>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                pDUType: (_el: _Element): void => {
                    pDUType = _decode_PDUType(_el);
                },
                parameter: (_el: _Element): void => {
                    parameter = _decode_Parameter(_el);
                },
                responseTimeout: (_el: _Element): void => {
                    responseTimeout = _decode_ResponseTimeout(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PDUReception,
                _extension_additions_list_spec_for_PDUReception,
                _root_component_type_list_2_spec_for_PDUReception,
                undefined
            );
            return new PDUReception /* SEQUENCE_CONSTRUCTOR_CALL */(
                pDUType,
                parameter,
                responseTimeout
            );
        };
    }
    return _cached_decoder_for_PDUReception(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PDUReception */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PDUReception */
let _cached_encoder_for_PDUReception: $.ASN1Encoder<PDUReception> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PDUReception */

/* START_OF_SYMBOL_DEFINITION _encode_PDUReception */
/**
 * @summary Encodes a(n) PDUReception into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDUReception, encoded as an ASN.1 Element.
 */
export function _encode_PDUReception(
    value: PDUReception,
    elGetter: $.ASN1Encoder<PDUReception>
) {
    if (!_cached_encoder_for_PDUReception) {
        _cached_encoder_for_PDUReception = function (
            value: PDUReception,
            elGetter: $.ASN1Encoder<PDUReception>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_PDUType(value.pDUType, $.BER),
                        /* REQUIRED   */ _encode_Parameter(
                            value.parameter,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.responseTimeout === undefined
                            ? undefined
                            : _encode_ResponseTimeout(
                                  value.responseTimeout,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PDUReception(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PDUReception */

/* eslint-enable */
