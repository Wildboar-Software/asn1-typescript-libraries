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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    Heading,
    _decode_Heading,
    _encode_Heading,
} from '../IPMSInformationObjects/Heading.ta';
export {
    Heading,
    _decode_Heading,
    _encode_Heading,
} from '../IPMSInformationObjects/Heading.ta';
import {
    Body,
    _decode_Body,
    _encode_Body,
} from '../IPMSInformationObjects/Body.ta';
export {
    Body,
    _decode_Body,
    _encode_Body,
} from '../IPMSInformationObjects/Body.ta';

/* START_OF_SYMBOL_DEFINITION IPM */
/**
 * @summary IPM
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPM ::= SEQUENCE {heading  Heading,
 *                   body     Body
 * }
 * ```
 *
 * @class
 */
export class IPM {
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
     * @summary Restructures an object into a IPM
     * @description
     *
     * This takes an `object` and converts it to a `IPM`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPM`.
     * @returns {IPM}
     */
    public static _from_object(_o: { [_K in keyof IPM]: IPM[_K] }): IPM {
        return new IPM(_o.heading, _o.body);
    }
}
/* END_OF_SYMBOL_DEFINITION IPM */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IPM */
/**
 * @summary The Leading Root Component Types of IPM
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IPM: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'heading',
        false,
        $.hasTag(_TagClass.universal, 17),
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IPM */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IPM */
/**
 * @summary The Trailing Root Component Types of IPM
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IPM: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IPM */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IPM */
/**
 * @summary The Extension Addition Component Types of IPM
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IPM: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IPM */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IPM */
let _cached_decoder_for_IPM: $.ASN1Decoder<IPM> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IPM */

/* START_OF_SYMBOL_DEFINITION _decode_IPM */
/**
 * @summary Decodes an ASN.1 element into a(n) IPM
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IPM} The decoded data structure.
 */
export function _decode_IPM(el: _Element) {
    if (!_cached_decoder_for_IPM) {
        _cached_decoder_for_IPM = function (el: _Element): IPM {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'IPM contained only ' +
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
            return new IPM(heading, body);
        };
    }
    return _cached_decoder_for_IPM(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IPM */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IPM */
let _cached_encoder_for_IPM: $.ASN1Encoder<IPM> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IPM */

/* START_OF_SYMBOL_DEFINITION _encode_IPM */
/**
 * @summary Encodes a(n) IPM into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPM, encoded as an ASN.1 Element.
 */
export function _encode_IPM(value: IPM, elGetter: $.ASN1Encoder<IPM>) {
    if (!_cached_encoder_for_IPM) {
        _cached_encoder_for_IPM = function (
            value: IPM,
            elGetter: $.ASN1Encoder<IPM>
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
    return _cached_encoder_for_IPM(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IPM */

/* eslint-enable */
