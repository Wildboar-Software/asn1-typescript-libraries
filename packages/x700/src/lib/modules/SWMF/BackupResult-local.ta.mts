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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';

/* START_OF_SYMBOL_DEFINITION BackupResult_local */
/**
 * @summary BackupResult_local
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BackupResult-local ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class BackupResult_local {
    constructor(
        /**
         * @summary `destination`.
         * @public
         * @readonly
         */
        readonly destination: ObjectInstance,
        /**
         * @summary `success`.
         * @public
         * @readonly
         */
        readonly success: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a BackupResult_local
     * @description
     *
     * This takes an `object` and converts it to a `BackupResult_local`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BackupResult_local`.
     * @returns {BackupResult_local}
     */
    public static _from_object(
        _o: { [_K in keyof BackupResult_local]: BackupResult_local[_K] }
    ): BackupResult_local {
        return new BackupResult_local(_o.destination, _o.success);
    }
}
/* END_OF_SYMBOL_DEFINITION BackupResult_local */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BackupResult_local */
/**
 * @summary The Leading Root Component Types of BackupResult_local
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BackupResult_local: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'destination',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'success',
        false,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BackupResult_local */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BackupResult_local */
/**
 * @summary The Trailing Root Component Types of BackupResult_local
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BackupResult_local: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BackupResult_local */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BackupResult_local */
/**
 * @summary The Extension Addition Component Types of BackupResult_local
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BackupResult_local: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BackupResult_local */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BackupResult_local */
let _cached_decoder_for_BackupResult_local: $.ASN1Decoder<BackupResult_local> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BackupResult_local */

/* START_OF_SYMBOL_DEFINITION _decode_BackupResult_local */
/**
 * @summary Decodes an ASN.1 element into a(n) BackupResult_local
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BackupResult_local} The decoded data structure.
 */
export function _decode_BackupResult_local(el: _Element) {
    if (!_cached_decoder_for_BackupResult_local) {
        _cached_decoder_for_BackupResult_local = function (
            el: _Element
        ): BackupResult_local {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'BackupResult-local contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'destination';
            sequence[1].name = 'success';
            let destination!: ObjectInstance;
            let success!: BOOLEAN;
            destination = _decode_ObjectInstance(sequence[0]);
            success = $._decodeBoolean(sequence[1]);
            return new BackupResult_local(destination, success);
        };
    }
    return _cached_decoder_for_BackupResult_local(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BackupResult_local */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BackupResult_local */
let _cached_encoder_for_BackupResult_local: $.ASN1Encoder<BackupResult_local> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BackupResult_local */

/* START_OF_SYMBOL_DEFINITION _encode_BackupResult_local */
/**
 * @summary Encodes a(n) BackupResult_local into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BackupResult_local, encoded as an ASN.1 Element.
 */
export function _encode_BackupResult_local(
    value: BackupResult_local,
    elGetter: $.ASN1Encoder<BackupResult_local>
) {
    if (!_cached_encoder_for_BackupResult_local) {
        _cached_encoder_for_BackupResult_local = function (
            value: BackupResult_local,
            elGetter: $.ASN1Encoder<BackupResult_local>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.destination,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBoolean(value.success, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BackupResult_local(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BackupResult_local */

/* eslint-enable */
