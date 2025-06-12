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
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.js';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.js';

/* START_OF_SYMBOL_DEFINITION ConvertPtoPToMulticastReply_Item_success */
/**
 * @summary ConvertPtoPToMulticastReply_Item_success
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConvertPtoPToMulticastReply-Item-success ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ConvertPtoPToMulticastReply_Item_success {
    constructor(
        /**
         * @summary `mpXC`.
         * @public
         * @readonly
         */
        readonly mpXC: ObjectInstance,
        /**
         * @summary `xC`.
         * @public
         * @readonly
         */
        readonly xC: ObjectInstance
    ) {}

    /**
     * @summary Restructures an object into a ConvertPtoPToMulticastReply_Item_success
     * @description
     *
     * This takes an `object` and converts it to a `ConvertPtoPToMulticastReply_Item_success`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConvertPtoPToMulticastReply_Item_success`.
     * @returns {ConvertPtoPToMulticastReply_Item_success}
     */
    public static _from_object(
        _o: {
            [_K in keyof ConvertPtoPToMulticastReply_Item_success]: ConvertPtoPToMulticastReply_Item_success[_K];
        }
    ): ConvertPtoPToMulticastReply_Item_success {
        return new ConvertPtoPToMulticastReply_Item_success(_o.mpXC, _o.xC);
    }
}
/* END_OF_SYMBOL_DEFINITION ConvertPtoPToMulticastReply_Item_success */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ConvertPtoPToMulticastReply_Item_success */
/**
 * @summary The Leading Root Component Types of ConvertPtoPToMulticastReply_Item_success
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ConvertPtoPToMulticastReply_Item_success: $.ComponentSpec[] = [
    new $.ComponentSpec('mpXC', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec('xC', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ConvertPtoPToMulticastReply_Item_success */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ConvertPtoPToMulticastReply_Item_success */
/**
 * @summary The Trailing Root Component Types of ConvertPtoPToMulticastReply_Item_success
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ConvertPtoPToMulticastReply_Item_success: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ConvertPtoPToMulticastReply_Item_success */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ConvertPtoPToMulticastReply_Item_success */
/**
 * @summary The Extension Addition Component Types of ConvertPtoPToMulticastReply_Item_success
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ConvertPtoPToMulticastReply_Item_success: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ConvertPtoPToMulticastReply_Item_success */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConvertPtoPToMulticastReply_Item_success */
let _cached_decoder_for_ConvertPtoPToMulticastReply_Item_success: $.ASN1Decoder<ConvertPtoPToMulticastReply_Item_success> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConvertPtoPToMulticastReply_Item_success */

/* START_OF_SYMBOL_DEFINITION _decode_ConvertPtoPToMulticastReply_Item_success */
/**
 * @summary Decodes an ASN.1 element into a(n) ConvertPtoPToMulticastReply_Item_success
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConvertPtoPToMulticastReply_Item_success} The decoded data structure.
 */
export function _decode_ConvertPtoPToMulticastReply_Item_success(el: _Element) {
    if (!_cached_decoder_for_ConvertPtoPToMulticastReply_Item_success) {
        _cached_decoder_for_ConvertPtoPToMulticastReply_Item_success = function (
            el: _Element
        ): ConvertPtoPToMulticastReply_Item_success {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ConvertPtoPToMulticastReply-Item-success contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'mpXC';
            sequence[1].name = 'xC';
            let mpXC!: ObjectInstance;
            let xC!: ObjectInstance;
            mpXC = _decode_ObjectInstance(sequence[0]);
            xC = _decode_ObjectInstance(sequence[1]);
            return new ConvertPtoPToMulticastReply_Item_success(mpXC, xC);
        };
    }
    return _cached_decoder_for_ConvertPtoPToMulticastReply_Item_success(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConvertPtoPToMulticastReply_Item_success */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConvertPtoPToMulticastReply_Item_success */
let _cached_encoder_for_ConvertPtoPToMulticastReply_Item_success: $.ASN1Encoder<ConvertPtoPToMulticastReply_Item_success> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConvertPtoPToMulticastReply_Item_success */

/* START_OF_SYMBOL_DEFINITION _encode_ConvertPtoPToMulticastReply_Item_success */
/**
 * @summary Encodes a(n) ConvertPtoPToMulticastReply_Item_success into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConvertPtoPToMulticastReply_Item_success, encoded as an ASN.1 Element.
 */
export function _encode_ConvertPtoPToMulticastReply_Item_success(
    value: ConvertPtoPToMulticastReply_Item_success,
    elGetter: $.ASN1Encoder<ConvertPtoPToMulticastReply_Item_success>
) {
    if (!_cached_encoder_for_ConvertPtoPToMulticastReply_Item_success) {
        _cached_encoder_for_ConvertPtoPToMulticastReply_Item_success = function (
            value: ConvertPtoPToMulticastReply_Item_success,
            elGetter: $.ASN1Encoder<ConvertPtoPToMulticastReply_Item_success>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.mpXC,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.xC,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ConvertPtoPToMulticastReply_Item_success(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_ConvertPtoPToMulticastReply_Item_success */

/* eslint-enable */
