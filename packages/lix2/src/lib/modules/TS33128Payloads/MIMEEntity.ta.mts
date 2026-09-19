/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MIMEContentType, _decode_MIMEContentType, _encode_MIMEContentType } from "../TS33128Payloads/MIMEContentType.ta.mjs";
// export { MIMEContentType, _decode_MIMEContentType, _encode_MIMEContentType } from "../TS33128Payloads/MIMEContentType.ta.mjs";
import { EncapsulatedMIMEEntity, _decode_EncapsulatedMIMEEntity, _encode_EncapsulatedMIMEEntity } from "../TS33128Payloads/EncapsulatedMIMEEntity.ta.mjs";
// export { EncapsulatedMIMEEntity, _decode_EncapsulatedMIMEEntity, _encode_EncapsulatedMIMEEntity } from "../TS33128Payloads/EncapsulatedMIMEEntity.ta.mjs";


/**
 * @summary MIMEEntity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MIMEEntity ::= SEQUENCE
 * {
 *     contentType            [1] MIMEContentType,
 *     encapsulatedMIMEEntity [2] EncapsulatedMIMEEntity
 * }
 * ```
 * 
 * @class
 */
export
class MIMEEntity {
    constructor (
        /**
         * @summary `contentType`.
         * @public
         * @readonly
         */
        readonly contentType: MIMEContentType,
        /**
         * @summary `encapsulatedMIMEEntity`.
         * @public
         * @readonly
         */
        readonly encapsulatedMIMEEntity: EncapsulatedMIMEEntity
    ) {}

    /**
     * @summary Restructures an object into a MIMEEntity
     * @description
     * 
     * This takes an `object` and converts it to a `MIMEEntity`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MIMEEntity`.
     * @returns {MIMEEntity}
     */
    public static _from_object (_o: { [_K in keyof (MIMEEntity)]: (MIMEEntity)[_K] }): MIMEEntity {
        return new MIMEEntity(_o.contentType, _o.encapsulatedMIMEEntity);
    }


}

/**
 * @summary The Leading Root Component Types of MIMEEntity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MIMEEntity: $.ComponentSpec[] = [
    new $.ComponentSpec("contentType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("encapsulatedMIMEEntity", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of MIMEEntity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MIMEEntity: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MIMEEntity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MIMEEntity: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MIMEEntity: $.ASN1Decoder<MIMEEntity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MIMEEntity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MIMEEntity (el: _Element): MIMEEntity {
    if (!_cached_decoder_for_MIMEEntity) { _cached_decoder_for_MIMEEntity = function (el: _Element): MIMEEntity {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("MIMEEntity contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "contentType";
    sequence[1].name = "encapsulatedMIMEEntity";
    let contentType!: MIMEContentType;
    let encapsulatedMIMEEntity!: EncapsulatedMIMEEntity;
    contentType = $._decode_implicit<MIMEContentType>(() => _decode_MIMEContentType)(sequence[0]);
    encapsulatedMIMEEntity = $._decode_implicit<EncapsulatedMIMEEntity>(() => _decode_EncapsulatedMIMEEntity)(sequence[1]);
    return new MIMEEntity(
        contentType,
        encapsulatedMIMEEntity,

    );
}; }
    return _cached_decoder_for_MIMEEntity(el);
}

let _cached_encoder_for_MIMEEntity: $.ASN1Encoder<MIMEEntity> | null = null;

/**
 * @summary Encodes a(n) MIMEEntity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MIMEEntity, encoded as an ASN.1 Element.
 */
export
function _encode_MIMEEntity (value: MIMEEntity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MIMEEntity) { _cached_encoder_for_MIMEEntity = function (value: MIMEEntity, elGetter: $.ASN1Encoder<MIMEEntity>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MIMEContentType, $.BER)(value.contentType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EncapsulatedMIMEEntity, $.BER)(value.encapsulatedMIMEEntity, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MIMEEntity(value, elGetter);
}


/* eslint-enable */
