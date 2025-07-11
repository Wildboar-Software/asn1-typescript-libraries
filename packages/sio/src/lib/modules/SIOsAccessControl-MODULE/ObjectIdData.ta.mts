/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ObjectIdName,
    _decode_ObjectIdName,
    _encode_ObjectIdName,
} from "../SIOsAccessControl-MODULE/ObjectIdName.ta.mjs";

/**
 * @summary ObjectIdData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectIdData ::= SEQUENCE {
 *   objectId      OBJECT IDENTIFIER,
 *   objectIdName  ObjectIdName
 * }
 * ```
 *
 */
export class ObjectIdData {
    constructor(
        /**
         * @summary `objectId`.
         * @public
         * @readonly
         */
        readonly objectId: OBJECT_IDENTIFIER,
        /**
         * @summary `objectIdName`.
         * @public
         * @readonly
         */
        readonly objectIdName: ObjectIdName
    ) {}

    /**
     * @summary Restructures an object into a ObjectIdData
     * @description
     *
     * This takes an `object` and converts it to a `ObjectIdData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ObjectIdData`.
     * @returns {ObjectIdData}
     */
    public static _from_object(
        _o: { [_K in keyof ObjectIdData]: ObjectIdData[_K] }
    ): ObjectIdData {
        return new ObjectIdData(_o.objectId, _o.objectIdName);
    }
}


/**
 * @summary The Leading Root Component Types of ObjectIdData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ObjectIdData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "objectId",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "objectIdName",
        false,
        $.hasAnyTag
    ),
];


/**
 * @summary The Trailing Root Component Types of ObjectIdData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ObjectIdData: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ObjectIdData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ObjectIdData: $.ComponentSpec[] = [];


let _cached_decoder_for_ObjectIdData: $.ASN1Decoder<ObjectIdData> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ObjectIdData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectIdData} The decoded data structure.
 */
export function _decode_ObjectIdData(el: _Element): ObjectIdData {
    if (!_cached_decoder_for_ObjectIdData) {
        _cached_decoder_for_ObjectIdData = function (
            el: _Element
        ): ObjectIdData {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "ObjectIdData contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "objectId";
            sequence[1].name = "objectIdName";
            let objectId!: OBJECT_IDENTIFIER;
            let objectIdName!: ObjectIdName;
            objectId = $._decodeObjectIdentifier(sequence[0]);
            objectIdName = _decode_ObjectIdName(sequence[1]);
            return new ObjectIdData(objectId, objectIdName);
        };
    }
    return _cached_decoder_for_ObjectIdData(el);
}


let _cached_encoder_for_ObjectIdData: $.ASN1Encoder<ObjectIdData> | null = null;


/**
 * @summary Encodes a(n) ObjectIdData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectIdData, encoded as an ASN.1 Element.
 */
export function _encode_ObjectIdData(
    value: ObjectIdData,
    elGetter: $.ASN1Encoder<ObjectIdData>
): _Element {
    if (!_cached_encoder_for_ObjectIdData) {
        _cached_encoder_for_ObjectIdData = function (
            value: ObjectIdData        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.objectId,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ObjectIdName(
                            value.objectIdName,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ObjectIdData(value, elGetter);
}


/* eslint-enable */
