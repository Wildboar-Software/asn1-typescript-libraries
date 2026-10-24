/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AccessType, _decode_AccessType, _encode_AccessType, _enum_for_AccessType } from "../GCSEHI2Operations/AccessType.ta.mjs";
// export { AccessType, _enum_for_AccessType, AccessType_ePS_Unicast /* IMPORTED_LONG_ENUMERATION_ITEM */, ePS_Unicast /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_ePS_Multicast /* IMPORTED_LONG_ENUMERATION_ITEM */, ePS_Multicast /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessType, _encode_AccessType } from "../GCSEHI2Operations/AccessType.ta.mjs";
import { AccessID, _decode_AccessID, _encode_AccessID } from "../GCSEHI2Operations/AccessID.ta.mjs";
// export { AccessID, _decode_AccessID, _encode_AccessID } from "../GCSEHI2Operations/AccessID.ta.mjs";


/**
 * @summary Upstream
 * @description
 * 
 * Upstream access used by the target toward the GCS AS: the access kind and its
 * identifier. 3GPP TS 33.108, annex B.14.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Upstream ::= SEQUENCE
 * {
 *         accessType [1] AccessType,
 *         accessId   [2] AccessID,     
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class Upstream {
    /**
     * @summary `accessType`.
     * @description
     * 
     * Whether this upstream access is EPS unicast or EPS multicast. 3GPP TS
     * 33.108, annex B.14.1.
     * 
     * @public
     * @readonly
     */
    readonly accessType: AccessType;
    /**
     * @summary `accessId`.
     * @description
     * 
     * Identifier of this upstream access: a TMGI or the UE IP address. 3GPP TS
     * 33.108, annex B.14.1.
     * 
     * @public
     * @readonly
     */
    readonly accessId: AccessID;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        accessType: AccessType,
        accessId: AccessID,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.accessType = accessType;
        this.accessId = accessId;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a Upstream
     * @description
     * 
     * This takes an `object` and converts it to a `Upstream`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Upstream`.
     * @returns {Upstream}
     */
    public static _from_object (_o: { [_K in keyof (Upstream)]: (Upstream)[_K] }): Upstream {
        return new Upstream(_o.accessType, _o.accessId, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `accessType`
         * @public
         * @static
         */

    public static _enum_for_accessType = _enum_for_AccessType;
}

/**
 * @summary The Leading Root Component Types of Upstream
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Upstream: $.ComponentSpec[] = [
    new $.ComponentSpec("accessType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("accessId", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Upstream
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Upstream: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Upstream
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Upstream: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Upstream: $.ASN1Decoder<Upstream> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Upstream
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Upstream (el: _Element): Upstream {
    if (!_cached_decoder_for_Upstream) { _cached_decoder_for_Upstream = function (el: _Element): Upstream {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Upstream contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "accessType";
    sequence[1].name = "accessId";
    let accessType!: AccessType;
    let accessId!: AccessID;
    accessType = $._decode_implicit<AccessType>(() => _decode_AccessType)(sequence[0]);
    accessId = $._decode_explicit<AccessID>(() => _decode_AccessID)(sequence[1]);
    return new Upstream(
        accessType,
        accessId,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_Upstream(el);
}

let _cached_encoder_for_Upstream: $.ASN1Encoder<Upstream> | null = null;

/**
 * @summary Encodes a(n) Upstream into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Upstream, encoded as an ASN.1 Element.
 */
export
function _encode_Upstream (value: Upstream, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Upstream) { _cached_encoder_for_Upstream = function (value: Upstream, elGetter: $.ASN1Encoder<Upstream>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AccessType, $.BER)(value.accessType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_AccessID, $.BER)(value.accessId, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Upstream(value, elGetter);
}


/* eslint-enable */
