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
import { GF_Updates_gateType, _enum_for_GF_Updates_gateType, _decode_GF_Updates_gateType, _encode_GF_Updates_gateType } from "../SCPP-MESSAGES/GF-Updates-gateType.ta.mjs";
import { IGCS_Address, _decode_IGCS_Address, _encode_IGCS_Address } from "../SCPP-MESSAGES/IGCS-Address.ta.mjs";


/**
 * @summary GF_Updates
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GF-Updates ::= SEQUENCE {
 *   gateType    ENUMERATED {sgf(0), rgf(1)},
 *   gateAdd     IGCS-Address,
 *   gateRemove  IGCS-Address
 * }
 * ```
 * 
 * @class
 */
export
class GF_Updates {
    constructor (
        /**
         * @summary `gateType`.
         * @public
         * @readonly
         */
        readonly gateType: GF_Updates_gateType,
        /**
         * @summary `gateAdd`.
         * @public
         * @readonly
         */
        readonly gateAdd: IGCS_Address,
        /**
         * @summary `gateRemove`.
         * @public
         * @readonly
         */
        readonly gateRemove: IGCS_Address
    ) {}

    /**
     * @summary Restructures an object into a GF_Updates
     * @description
     * 
     * This takes an `object` and converts it to a `GF_Updates`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GF_Updates`.
     * @returns {GF_Updates}
     */
    public static _from_object (_o: { [_K in keyof (GF_Updates)]: (GF_Updates)[_K] }): GF_Updates {
        return new GF_Updates(_o.gateType, _o.gateAdd, _o.gateRemove);
    }

        /**
         * @summary The enum used as the type of the component `gateType`
         * @public
         * @static
         */

    public static _enum_for_gateType = _enum_for_GF_Updates_gateType;
}

/**
 * @summary The Leading Root Component Types of GF_Updates
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GF_Updates: $.ComponentSpec[] = [
    new $.ComponentSpec("gateType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("gateAdd", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gateRemove", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of GF_Updates
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GF_Updates: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GF_Updates
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GF_Updates: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GF_Updates: $.ASN1Decoder<GF_Updates> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GF_Updates
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GF_Updates (el: _Element): GF_Updates {
    if (!_cached_decoder_for_GF_Updates) { _cached_decoder_for_GF_Updates = function (el: _Element): GF_Updates {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("GF-Updates contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "gateType";
    sequence[1].name = "gateAdd";
    sequence[2].name = "gateRemove";
    const gateType = _decode_GF_Updates_gateType(sequence[0]);
    const gateAdd = _decode_IGCS_Address(sequence[1]);
    const gateRemove = _decode_IGCS_Address(sequence[2]);
    return new GF_Updates(
        gateType,
        gateAdd,
        gateRemove,

    );
}; }
    return _cached_decoder_for_GF_Updates(el);
}

let _cached_encoder_for_GF_Updates: $.ASN1Encoder<GF_Updates> | null = null;

/**
 * @summary Encodes a(n) GF_Updates into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GF_Updates, encoded as an ASN.1 Element.
 */
export
function _encode_GF_Updates (value: GF_Updates, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GF_Updates) { _cached_encoder_for_GF_Updates = function (value: GF_Updates): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_GF_Updates_gateType(value.gateType, $.BER),
            /* REQUIRED   */ _encode_IGCS_Address(value.gateAdd, $.BER),
            /* REQUIRED   */ _encode_IGCS_Address(value.gateRemove, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GF_Updates(value, elGetter);
}


/* eslint-enable */
