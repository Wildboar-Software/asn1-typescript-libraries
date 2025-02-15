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

/* START_OF_SYMBOL_DEFINITION LinkEndCharacteristics */
/**
 * @summary LinkEndCharacteristics
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LinkEndCharacteristics ::= SEQUENCE {
 *   endID              [0]  GraphicString,
 *   loopbackSupported  [1]  BOOLEAN,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class LinkEndCharacteristics {
    constructor(
        /**
         * @summary `endID`.
         * @public
         * @readonly
         */
        readonly endID: GraphicString,
        /**
         * @summary `loopbackSupported`.
         * @public
         * @readonly
         */
        readonly loopbackSupported: BOOLEAN,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a LinkEndCharacteristics
     * @description
     *
     * This takes an `object` and converts it to a `LinkEndCharacteristics`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LinkEndCharacteristics`.
     * @returns {LinkEndCharacteristics}
     */
    public static _from_object(
        _o: { [_K in keyof LinkEndCharacteristics]: LinkEndCharacteristics[_K] }
    ): LinkEndCharacteristics {
        return new LinkEndCharacteristics(
            _o.endID,
            _o.loopbackSupported,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION LinkEndCharacteristics */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LinkEndCharacteristics */
/**
 * @summary The Leading Root Component Types of LinkEndCharacteristics
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_LinkEndCharacteristics: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'endID',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'loopbackSupported',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LinkEndCharacteristics */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LinkEndCharacteristics */
/**
 * @summary The Trailing Root Component Types of LinkEndCharacteristics
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LinkEndCharacteristics: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LinkEndCharacteristics */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LinkEndCharacteristics */
/**
 * @summary The Extension Addition Component Types of LinkEndCharacteristics
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LinkEndCharacteristics: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LinkEndCharacteristics */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LinkEndCharacteristics */
let _cached_decoder_for_LinkEndCharacteristics: $.ASN1Decoder<LinkEndCharacteristics> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LinkEndCharacteristics */

/* START_OF_SYMBOL_DEFINITION _decode_LinkEndCharacteristics */
/**
 * @summary Decodes an ASN.1 element into a(n) LinkEndCharacteristics
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LinkEndCharacteristics} The decoded data structure.
 */
export function _decode_LinkEndCharacteristics(el: _Element) {
    if (!_cached_decoder_for_LinkEndCharacteristics) {
        _cached_decoder_for_LinkEndCharacteristics = function (
            el: _Element
        ): LinkEndCharacteristics {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'LinkEndCharacteristics contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'endID';
            sequence[1].name = 'loopbackSupported';
            let endID!: GraphicString;
            let loopbackSupported!: BOOLEAN;
            endID = $._decode_implicit<GraphicString>(
                () => $._decodeGraphicString
            )(sequence[0]);
            loopbackSupported = $._decode_implicit<BOOLEAN>(
                () => $._decodeBoolean
            )(sequence[1]);
            return new LinkEndCharacteristics(
                endID,
                loopbackSupported,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_LinkEndCharacteristics(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LinkEndCharacteristics */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LinkEndCharacteristics */
let _cached_encoder_for_LinkEndCharacteristics: $.ASN1Encoder<LinkEndCharacteristics> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LinkEndCharacteristics */

/* START_OF_SYMBOL_DEFINITION _encode_LinkEndCharacteristics */
/**
 * @summary Encodes a(n) LinkEndCharacteristics into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LinkEndCharacteristics, encoded as an ASN.1 Element.
 */
export function _encode_LinkEndCharacteristics(
    value: LinkEndCharacteristics,
    elGetter: $.ASN1Encoder<LinkEndCharacteristics>
) {
    if (!_cached_encoder_for_LinkEndCharacteristics) {
        _cached_encoder_for_LinkEndCharacteristics = function (
            value: LinkEndCharacteristics,
            elGetter: $.ASN1Encoder<LinkEndCharacteristics>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                0,
                                () => $._encodeGraphicString,
                                $.BER
                            )(value.endID, $.BER),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                1,
                                () => $._encodeBoolean,
                                $.BER
                            )(value.loopbackSupported, $.BER),
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
    return _cached_encoder_for_LinkEndCharacteristics(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LinkEndCharacteristics */

/* eslint-enable */
