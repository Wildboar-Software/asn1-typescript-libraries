/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LegID, _decode_LegID, _encode_LegID } from "../IN-CS-1-Datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS-1-Datatypes/LegID.ta.mjs";
import { LegStatus, _decode_LegStatus, _encode_LegStatus, _enum_for_LegStatus } from "../IN-CS-1-DataTypes-appendix/LegStatus.ta.mjs";
// export { LegStatus, _enum_for_LegStatus, LegStatus_connected /* IMPORTED_LONG_ENUMERATION_ITEM */, connected /* IMPORTED_SHORT_ENUMERATION_ITEM */, LegStatus_unconnected /* IMPORTED_LONG_ENUMERATION_ITEM */, unconnected /* IMPORTED_SHORT_ENUMERATION_ITEM */, LegStatus_pending /* IMPORTED_LONG_ENUMERATION_ITEM */, pending /* IMPORTED_SHORT_ENUMERATION_ITEM */, LegStatus_interacting /* IMPORTED_LONG_ENUMERATION_ITEM */, interacting /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LegStatus, _encode_LegStatus } from "../IN-CS-1-DataTypes-appendix/LegStatus.ta.mjs";


/**
 * @summary LegInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LegInformation ::= SEQUENCE {legID      [0]  LegID,
 *                              legStatus  [1]  LegStatus
 * }
 * ```
 * 
 * @class
 */
export
class LegInformation {
    /**
     * @summary `legID`.
     * @public
     * @readonly
     */
    readonly legID: LegID;
    /**
     * @summary `legStatus`.
     * @public
     * @readonly
     */
    readonly legStatus: LegStatus;

    constructor (
        legID: LegID,
        legStatus: LegStatus
    ) {
        this.legID = legID;
        this.legStatus = legStatus;
    }

    /**
     * @summary Restructures an object into a LegInformation
     * @description
     * 
     * This takes an `object` and converts it to a `LegInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LegInformation`.
     * @returns {LegInformation}
     */
    public static _from_object (_o: { [_K in keyof (LegInformation)]: (LegInformation)[_K] }): LegInformation {
        return new LegInformation(_o.legID, _o.legStatus);
    }

        /**
         * @summary The enum used as the type of the component `legStatus`
         * @public
         * @static
         */

    public static _enum_for_legStatus = _enum_for_LegStatus;
}

/**
 * @summary The Leading Root Component Types of LegInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LegInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("legID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("legStatus", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of LegInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LegInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LegInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LegInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LegInformation: $.ASN1Decoder<LegInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LegInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LegInformation (el: _Element): LegInformation {
    if (!_cached_decoder_for_LegInformation) { _cached_decoder_for_LegInformation = function (el: _Element): LegInformation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("LegInformation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "legID";
    sequence[1].name = "legStatus";
    let legID!: LegID;
    let legStatus!: LegStatus;
    legID = $._decode_explicit<LegID>(() => _decode_LegID)(sequence[0]);
    legStatus = $._decode_implicit<LegStatus>(() => _decode_LegStatus)(sequence[1]);
    return new LegInformation(
        legID,
        legStatus,

    );
}; }
    return _cached_decoder_for_LegInformation(el);
}

let _cached_encoder_for_LegInformation: $.ASN1Encoder<LegInformation> | null = null;

/**
 * @summary Encodes a(n) LegInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LegInformation, encoded as an ASN.1 Element.
 */
export
function _encode_LegInformation (value: LegInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LegInformation) { _cached_encoder_for_LegInformation = function (value: LegInformation, elGetter: $.ASN1Encoder<LegInformation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_LegID, $.BER)(value.legID, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_LegStatus, $.BER)(value.legStatus, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_LegInformation(value, elGetter);
}


/* eslint-enable */
