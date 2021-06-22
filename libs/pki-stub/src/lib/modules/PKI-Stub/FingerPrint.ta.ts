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
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from '../PKI-Stub/AlgorithmIdentifier.ta';
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from '../PKI-Stub/AlgorithmIdentifier.ta';

/* START_OF_SYMBOL_DEFINITION FingerPrint */
/**
 * @summary FingerPrint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FingerPrint {ToBeFingerprinted} ::= SEQUENCE {
 *   algorithmIdentifier  AlgorithmIdentifier{{SupportedAlgorithms}},
 *   fingerprint          BIT STRING,
 *   ... }
 * ```
 *
 * @class
 */
export class FingerPrint<ToBeFingerprinted> {
    constructor(
        /**
         * @summary `algorithmIdentifier`.
         * @public
         * @readonly
         */
        readonly algorithmIdentifier: AlgorithmIdentifier,
        /**
         * @summary `fingerprint`.
         * @public
         * @readonly
         */
        readonly fingerprint: BIT_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a FingerPrint
     * @description
     *
     * This takes an `object` and converts it to a `FingerPrint`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FingerPrint`.
     * @returns {FingerPrint}
     */
    public static _from_object(
        _o: { [_K in keyof FingerPrint<any>]: FingerPrint<any>[_K] }
    ): FingerPrint<any> {
        return new FingerPrint(
            _o.algorithmIdentifier,
            _o.fingerprint,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION FingerPrint */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_FingerPrint */
/**
 * @summary The Leading Root Component Types of FingerPrint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_FingerPrint: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'algorithmIdentifier',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'fingerprint',
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_FingerPrint */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_FingerPrint */
/**
 * @summary The Trailing Root Component Types of FingerPrint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_FingerPrint: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_FingerPrint */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_FingerPrint */
/**
 * @summary The Extension Addition Component Types of FingerPrint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_FingerPrint: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_FingerPrint */

/* START_OF_SYMBOL_DEFINITION _get_decoder_for_FingerPrint */
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) FingerPrint
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_FingerPrint<ToBeFingerprinted>(
    _decode_ToBeFingerprinted: $.ASN1Decoder<ToBeFingerprinted>
) {
    return function <ToBeFingerprinted>(
        el: _Element
    ): FingerPrint<ToBeFingerprinted> {
        const sequence: _Element[] = el.sequence;
        if (sequence.length < 2) {
            throw new _ConstructionError(
                'FingerPrint contained only ' +
                    sequence.length.toString() +
                    ' elements.'
            );
        }
        sequence[0].name = 'algorithmIdentifier';
        sequence[1].name = 'fingerprint';
        let algorithmIdentifier!: AlgorithmIdentifier;
        let fingerprint!: BIT_STRING;
        algorithmIdentifier = _decode_AlgorithmIdentifier(sequence[0]);
        fingerprint = $._decodeBitString(sequence[1]);
        return new FingerPrint<ToBeFingerprinted>(
            algorithmIdentifier,
            fingerprint,
            sequence.slice(2)
        );
    };
}
/* END_OF_SYMBOL_DEFINITION _get_decoder_for_FingerPrint */

/* START_OF_SYMBOL_DEFINITION _get_encoder_for_FingerPrint */
/**
 * @summary Returns a function that will encode a(n) FingerPrint into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) FingerPrint as an ASN.1 element.
 */
export function _get_encoder_for_FingerPrint<ToBeFingerprinted>(
    _encode_ToBeFingerprinted: $.ASN1Encoder<ToBeFingerprinted>
) {
    return function (
        value: FingerPrint<ToBeFingerprinted>,
        elGetter: $.ASN1Encoder<FingerPrint<ToBeFingerprinted>>
    ): _Element {
        return $._encodeSequence(
            ([] as (_Element | undefined)[])
                .concat(
                    [
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.algorithmIdentifier,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBitString(
                            value.fingerprint,
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
/* END_OF_SYMBOL_DEFINITION _get_encoder_for_FingerPrint */

/* eslint-enable */
