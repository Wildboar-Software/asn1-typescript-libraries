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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';

/* START_OF_SYMBOL_DEFINITION AddNWTTPsToAccessGroupResult */
/**
 * @summary AddNWTTPsToAccessGroupResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddNWTTPsToAccessGroupResult ::= SEQUENCE {
 *   accessGroup  ObjectInstance,
 *   addedNWTTPs  SET OF ObjectInstance
 * }
 * ```
 *
 * @class
 */
export class AddNWTTPsToAccessGroupResult {
    constructor(
        /**
         * @summary `accessGroup`.
         * @public
         * @readonly
         */
        readonly accessGroup: ObjectInstance,
        /**
         * @summary `addedNWTTPs`.
         * @public
         * @readonly
         */
        readonly addedNWTTPs: ObjectInstance[]
    ) {}

    /**
     * @summary Restructures an object into a AddNWTTPsToAccessGroupResult
     * @description
     *
     * This takes an `object` and converts it to a `AddNWTTPsToAccessGroupResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddNWTTPsToAccessGroupResult`.
     * @returns {AddNWTTPsToAccessGroupResult}
     */
    public static _from_object(
        _o: {
            [_K in keyof AddNWTTPsToAccessGroupResult]: AddNWTTPsToAccessGroupResult[_K];
        }
    ): AddNWTTPsToAccessGroupResult {
        return new AddNWTTPsToAccessGroupResult(_o.accessGroup, _o.addedNWTTPs);
    }
}
/* END_OF_SYMBOL_DEFINITION AddNWTTPsToAccessGroupResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AddNWTTPsToAccessGroupResult */
/**
 * @summary The Leading Root Component Types of AddNWTTPsToAccessGroupResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddNWTTPsToAccessGroupResult: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'accessGroup',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'addedNWTTPs',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AddNWTTPsToAccessGroupResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AddNWTTPsToAccessGroupResult */
/**
 * @summary The Trailing Root Component Types of AddNWTTPsToAccessGroupResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddNWTTPsToAccessGroupResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AddNWTTPsToAccessGroupResult */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AddNWTTPsToAccessGroupResult */
/**
 * @summary The Extension Addition Component Types of AddNWTTPsToAccessGroupResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddNWTTPsToAccessGroupResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AddNWTTPsToAccessGroupResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddNWTTPsToAccessGroupResult */
let _cached_decoder_for_AddNWTTPsToAccessGroupResult: $.ASN1Decoder<AddNWTTPsToAccessGroupResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddNWTTPsToAccessGroupResult */

/* START_OF_SYMBOL_DEFINITION _decode_AddNWTTPsToAccessGroupResult */
/**
 * @summary Decodes an ASN.1 element into a(n) AddNWTTPsToAccessGroupResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddNWTTPsToAccessGroupResult} The decoded data structure.
 */
export function _decode_AddNWTTPsToAccessGroupResult(el: _Element) {
    if (!_cached_decoder_for_AddNWTTPsToAccessGroupResult) {
        _cached_decoder_for_AddNWTTPsToAccessGroupResult = function (
            el: _Element
        ): AddNWTTPsToAccessGroupResult {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'AddNWTTPsToAccessGroupResult contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'accessGroup';
            sequence[1].name = 'addedNWTTPs';
            let accessGroup!: ObjectInstance;
            let addedNWTTPs!: ObjectInstance[];
            accessGroup = _decode_ObjectInstance(sequence[0]);
            addedNWTTPs = $._decodeSetOf<ObjectInstance>(
                () => _decode_ObjectInstance
            )(sequence[1]);
            return new AddNWTTPsToAccessGroupResult(accessGroup, addedNWTTPs);
        };
    }
    return _cached_decoder_for_AddNWTTPsToAccessGroupResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddNWTTPsToAccessGroupResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddNWTTPsToAccessGroupResult */
let _cached_encoder_for_AddNWTTPsToAccessGroupResult: $.ASN1Encoder<AddNWTTPsToAccessGroupResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddNWTTPsToAccessGroupResult */

/* START_OF_SYMBOL_DEFINITION _encode_AddNWTTPsToAccessGroupResult */
/**
 * @summary Encodes a(n) AddNWTTPsToAccessGroupResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddNWTTPsToAccessGroupResult, encoded as an ASN.1 Element.
 */
export function _encode_AddNWTTPsToAccessGroupResult(
    value: AddNWTTPsToAccessGroupResult,
    elGetter: $.ASN1Encoder<AddNWTTPsToAccessGroupResult>
) {
    if (!_cached_encoder_for_AddNWTTPsToAccessGroupResult) {
        _cached_encoder_for_AddNWTTPsToAccessGroupResult = function (
            value: AddNWTTPsToAccessGroupResult,
            elGetter: $.ASN1Encoder<AddNWTTPsToAccessGroupResult>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.accessGroup,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSetOf<ObjectInstance>(
                            () => _encode_ObjectInstance,
                            $.BER
                        )(value.addedNWTTPs, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AddNWTTPsToAccessGroupResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AddNWTTPsToAccessGroupResult */

/* eslint-enable */
