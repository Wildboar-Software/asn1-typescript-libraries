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
} from '../EDIMSInformationObjects/Heading.ta.mjs';
export {
    Heading,
    _decode_Heading,
    _encode_Heading,
} from '../EDIMSInformationObjects/Heading.ta.mjs';
import {
    BodyOrRemoved,
    _decode_BodyOrRemoved,
    _encode_BodyOrRemoved,
} from '../EDIMSInformationObjects/BodyOrRemoved.ta.mjs';
export {
    BodyOrRemoved,
    _decode_BodyOrRemoved,
    _encode_BodyOrRemoved,
} from '../EDIMSInformationObjects/BodyOrRemoved.ta.mjs';

/* START_OF_SYMBOL_DEFINITION MessageData */
/**
 * @summary MessageData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageData ::= SEQUENCE {heading  Heading,
 *                           body     BodyOrRemoved
 * }
 * ```
 *
 * @class
 */
export class MessageData {
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
        readonly body: BodyOrRemoved
    ) {}

    /**
     * @summary Restructures an object into a MessageData
     * @description
     *
     * This takes an `object` and converts it to a `MessageData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessageData`.
     * @returns {MessageData}
     */
    public static _from_object(
        _o: { [_K in keyof MessageData]: MessageData[_K] }
    ): MessageData {
        return new MessageData(_o.heading, _o.body);
    }
}
/* END_OF_SYMBOL_DEFINITION MessageData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MessageData */
/**
 * @summary The Leading Root Component Types of MessageData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MessageData: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MessageData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MessageData */
/**
 * @summary The Trailing Root Component Types of MessageData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MessageData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MessageData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MessageData */
/**
 * @summary The Extension Addition Component Types of MessageData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MessageData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MessageData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageData */
let _cached_decoder_for_MessageData: $.ASN1Decoder<MessageData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageData */

/* START_OF_SYMBOL_DEFINITION _decode_MessageData */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageData} The decoded data structure.
 */
export function _decode_MessageData(el: _Element) {
    if (!_cached_decoder_for_MessageData) {
        _cached_decoder_for_MessageData = function (el: _Element): MessageData {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'MessageData contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'heading';
            sequence[1].name = 'body';
            let heading!: Heading;
            let body!: BodyOrRemoved;
            heading = _decode_Heading(sequence[0]);
            body = _decode_BodyOrRemoved(sequence[1]);
            return new MessageData(heading, body);
        };
    }
    return _cached_decoder_for_MessageData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageData */
let _cached_encoder_for_MessageData: $.ASN1Encoder<MessageData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageData */

/* START_OF_SYMBOL_DEFINITION _encode_MessageData */
/**
 * @summary Encodes a(n) MessageData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageData, encoded as an ASN.1 Element.
 */
export function _encode_MessageData(
    value: MessageData,
    elGetter: $.ASN1Encoder<MessageData>
) {
    if (!_cached_encoder_for_MessageData) {
        _cached_encoder_for_MessageData = function (
            value: MessageData,
            elGetter: $.ASN1Encoder<MessageData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Heading(value.heading, $.BER),
                        /* REQUIRED   */ _encode_BodyOrRemoved(
                            value.body,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MessageData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageData */

/* eslint-enable */
