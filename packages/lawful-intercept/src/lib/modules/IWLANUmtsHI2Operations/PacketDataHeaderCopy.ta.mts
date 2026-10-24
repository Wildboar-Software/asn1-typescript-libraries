/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_TPDU_direction, _encode_TPDU_direction, _enum_for_TPDU_direction, TPDU_direction } from "../IWLANUmtsHI2Operations/TPDU-direction.ta.mjs";
// export { TPDU_direction, _enum_for_TPDU_direction, TPDU_direction_from_target /* IMPORTED_LONG_ENUMERATION_ITEM */, from_target /* IMPORTED_SHORT_ENUMERATION_ITEM */, TPDU_direction_to_target /* IMPORTED_LONG_ENUMERATION_ITEM */, to_target /* IMPORTED_SHORT_ENUMERATION_ITEM */, TPDU_direction_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TPDU_direction, _encode_TPDU_direction } from "../IWLANUmtsHI2Operations/TPDU-direction.ta.mjs";


/**
 * @summary PacketDataHeaderCopy
 * @description
 * 
 * Copy of one packet's header, used instead of mapping individual header fields
 * (table 8.9).
 * 
 * 3GPP TS 33.108, table 8.2, table 8.9, and annex B.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PacketDataHeaderCopy ::= SEQUENCE
 * {
 *     direction                [1] TPDU-direction,
 *     headerCopy                [2] OCTET STRING,    -- includes a copy of the packet header at the IP
 *                 -- network layer and above including extension headers, but excluding contents.
 * ...
 * }
 * ```
 * 
 * @class
 */
export
class PacketDataHeaderCopy {
    /**
     * @summary `direction`.
     * @description
     * 
     * Direction of the copied packet, from the target or to the target. Table
     * 8.2 names this packetDirection.
     * 
     * 3GPP TS 33.108, table 8.2 and annex B.7.
     * @public
     * @readonly
     */
    readonly direction: TPDU_direction;
    /**
     * @summary `headerCopy`.
     * @description
     * 
     * Copy of the header at the IP layer and above, including extension
     * headers, excluding the contents.
     * 
     * Conditional, and the alternative to the mapped fields (table 8.9).
     * 
     * 3GPP TS 33.108, table 8.2, table 8.9, and annex B.7.
     * @public
     * @readonly
     */
    readonly headerCopy: OCTET_STRING;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * Extension additions that this version of TS 33.108 does not define.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        direction: TPDU_direction,
        headerCopy: OCTET_STRING,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.direction = direction;
        this.headerCopy = headerCopy;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PacketDataHeaderCopy
     * @description
     * 
     * This takes an `object` and converts it to a `PacketDataHeaderCopy`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PacketDataHeaderCopy`.
     * @returns {PacketDataHeaderCopy}
     */
    public static _from_object (_o: { [_K in keyof (PacketDataHeaderCopy)]: (PacketDataHeaderCopy)[_K] }): PacketDataHeaderCopy {
        return new PacketDataHeaderCopy(_o.direction, _o.headerCopy, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `direction`
         * @public
         * @static
         */

    public static _enum_for_direction = _enum_for_TPDU_direction;
}

/**
 * @summary The Leading Root Component Types of PacketDataHeaderCopy
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PacketDataHeaderCopy: $.ComponentSpec[] = [
    new $.ComponentSpec("direction", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("headerCopy", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PacketDataHeaderCopy
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PacketDataHeaderCopy: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PacketDataHeaderCopy
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PacketDataHeaderCopy: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PacketDataHeaderCopy: $.ASN1Decoder<PacketDataHeaderCopy> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PacketDataHeaderCopy
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PacketDataHeaderCopy (el: _Element): PacketDataHeaderCopy {
    if (!_cached_decoder_for_PacketDataHeaderCopy) { _cached_decoder_for_PacketDataHeaderCopy = function (el: _Element): PacketDataHeaderCopy {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PacketDataHeaderCopy contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "direction";
    sequence[1].name = "headerCopy";
    let direction!: TPDU_direction;
    let headerCopy!: OCTET_STRING;
    direction = $._decode_implicit<TPDU_direction>(() => _decode_TPDU_direction)(sequence[0]);
    headerCopy = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new PacketDataHeaderCopy(
        direction,
        headerCopy,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_PacketDataHeaderCopy(el);
}

let _cached_encoder_for_PacketDataHeaderCopy: $.ASN1Encoder<PacketDataHeaderCopy> | null = null;

/**
 * @summary Encodes a(n) PacketDataHeaderCopy into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PacketDataHeaderCopy, encoded as an ASN.1 Element.
 */
export
function _encode_PacketDataHeaderCopy (value: PacketDataHeaderCopy, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PacketDataHeaderCopy) { _cached_encoder_for_PacketDataHeaderCopy = function (value: PacketDataHeaderCopy, elGetter: $.ASN1Encoder<PacketDataHeaderCopy>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TPDU_direction, $.BER)(value.direction, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.headerCopy, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PacketDataHeaderCopy(value, elGetter);
}


/* eslint-enable */
