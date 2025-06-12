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
    Heading,
    _decode_Heading,
    _encode_Heading,
} from '../EDIMSInformationObjects/Heading.ta.js';
export {
    Heading,
    _decode_Heading,
    _encode_Heading,
} from '../EDIMSInformationObjects/Heading.ta.js';
import {
    Body,
    _decode_Body,
    _encode_Body,
} from '../EDIMSInformationObjects/Body.ta.js';
export {
    Body,
    _decode_Body,
    _encode_Body,
} from '../EDIMSInformationObjects/Body.ta.js';

/* START_OF_SYMBOL_DEFINITION EDIM */
/**
 * @summary EDIM
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIM ::= SEQUENCE {heading  Heading,
 *                    body     Body
 * }
 * ```
 *
 * @class
 */
export class EDIM {
    constructor(
        /**
         * @summary `heading`.
         * @public
         * @readonly
         */
        readonly heading: Heading,
        /**
         * @summary `body`.
         * @public
         * @readonly
         */
        readonly body: Body
    ) {}

    /**
     * @summary Restructures an object into a EDIM
     * @description
     *
     * This takes an `object` and converts it to a `EDIM`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EDIM`.
     * @returns {EDIM}
     */
    public static _from_object(_o: { [_K in keyof EDIM]: EDIM[_K] }): EDIM {
        return new EDIM(_o.heading, _o.body);
    }
}
/* END_OF_SYMBOL_DEFINITION EDIM */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EDIM */
/**
 * @summary The Leading Root Component Types of EDIM
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EDIM: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'heading',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'body',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EDIM */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EDIM */
/**
 * @summary The Trailing Root Component Types of EDIM
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EDIM: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EDIM */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EDIM */
/**
 * @summary The Extension Addition Component Types of EDIM
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EDIM: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EDIM */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIM */
let _cached_decoder_for_EDIM: $.ASN1Decoder<EDIM> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIM */

/* START_OF_SYMBOL_DEFINITION _decode_EDIM */
/**
 * @summary Decodes an ASN.1 element into a(n) EDIM
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDIM} The decoded data structure.
 */
export function _decode_EDIM(el: _Element) {
    if (!_cached_decoder_for_EDIM) {
        _cached_decoder_for_EDIM = function (el: _Element): EDIM {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'EDIM contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'heading';
            sequence[1].name = 'body';
            let heading!: Heading;
            let body!: Body;
            heading = _decode_Heading(sequence[0]);
            body = _decode_Body(sequence[1]);
            return new EDIM(heading, body);
        };
    }
    return _cached_decoder_for_EDIM(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EDIM */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIM */
let _cached_encoder_for_EDIM: $.ASN1Encoder<EDIM> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIM */

/* START_OF_SYMBOL_DEFINITION _encode_EDIM */
/**
 * @summary Encodes a(n) EDIM into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDIM, encoded as an ASN.1 Element.
 */
export function _encode_EDIM(value: EDIM, elGetter: $.ASN1Encoder<EDIM>) {
    if (!_cached_encoder_for_EDIM) {
        _cached_encoder_for_EDIM = function (
            value: EDIM,
            elGetter: $.ASN1Encoder<EDIM>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Heading(value.heading, $.BER),
                        /* REQUIRED   */ _encode_Body(value.body, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EDIM(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EDIM */

/* eslint-enable */
