/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../SNMPv2-PDU/ObjectName.ta.mjs";
import { VarBind_valueType, _decode_VarBind_valueType, _encode_VarBind_valueType } from "../SNMPv2-PDU/VarBind-valueType.ta.mjs";

/**
 * @summary VarBind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VarBind ::= SEQUENCE {
 *     name ObjectName,
 *
 *     -- The original in IETF RFC 3416 uses invalid syntax: missing the component name.
 *     valueType CHOICE {
 *         value          ObjectSyntax,
 *         unSpecified    NULL,    -- in retrieval requests
 *
 *                                 -- exceptions in responses
 *         noSuchObject   [0] IMPLICIT NULL,
 *         noSuchInstance [1] IMPLICIT NULL,
 *         endOfMibView   [2] IMPLICIT NULL
 *     }
 * }
 * ```
 *
 */
export
class VarBind {
    constructor (
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: ObjectName,
        /**
         * @summary `valueType`.
         * @public
         * @readonly
         */
        readonly valueType: VarBind_valueType
    ) {}

    /**
     * @summary Restructures an object into a VarBind
     * @description
     *
     * This takes an `object` and converts it to a `VarBind`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `VarBind`.
     * @returns {VarBind}
     */
    public static _from_object (_o: { [_K in keyof (VarBind)]: (VarBind)[_K] }): VarBind {
        return new VarBind(_o.name, _o.valueType);
    }


}

/**
 * @summary The Leading Root Component Types of VarBind
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_VarBind: $.ComponentSpec[] = [
    new $.ComponentSpec("name", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("valueType", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of VarBind
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_VarBind: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of VarBind
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_VarBind: $.ComponentSpec[] = [

];

let _cached_decoder_for_VarBind: $.ASN1Decoder<VarBind> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VarBind
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VarBind} The decoded data structure.
 */
export
function _decode_VarBind (el: _Element): VarBind {
    if (!_cached_decoder_for_VarBind) { _cached_decoder_for_VarBind = function (el: _Element): VarBind {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("VarBind contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "name";
    sequence[1].name = "valueType";
    let name!: ObjectName;
    let valueType!: VarBind_valueType;
    name = _decode_ObjectName(sequence[0]);
    valueType = _decode_VarBind_valueType(sequence[1]);
    return new VarBind(
        name,
        valueType,

    );
}; }
    return _cached_decoder_for_VarBind(el);
}

let _cached_encoder_for_VarBind: $.ASN1Encoder<VarBind> | null = null;

/**
 * @summary Encodes a(n) VarBind into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VarBind, encoded as an ASN.1 Element.
 */
export
function _encode_VarBind (value: VarBind, elGetter: $.ASN1Encoder<VarBind>): _Element {
    if (!_cached_encoder_for_VarBind) { _cached_encoder_for_VarBind = function (value: VarBind): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ObjectName(value.name, $.BER),
            /* REQUIRED   */ _encode_VarBind_valueType(value.valueType, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_VarBind(value, elGetter);
}


/* eslint-enable */
