/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PTCTargetInformation, _decode_PTCTargetInformation, _encode_PTCTargetInformation } from "../TS33128Payloads/PTCTargetInformation.ta.mjs";
// export { PTCTargetInformation, _decode_PTCTargetInformation, _encode_PTCTargetInformation } from "../TS33128Payloads/PTCTargetInformation.ta.mjs";
import { Direction, _decode_Direction, _encode_Direction, _enum_for_Direction } from "../TS33128Payloads/Direction.ta.mjs";
// export { Direction, _enum_for_Direction, Direction_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Direction, _encode_Direction } from "../TS33128Payloads/Direction.ta.mjs";


/**
 * @summary PTCInstantPersonalAlert
 * @description
 * 
 * The IRI-POI present in the PTC server shall generate an xIRI containing a
 * PTCInstantPersonalAlert record when the IRI-POI present in the PTC server
 * detects that an Instant Personal Alert (IPA) (i.e. a request for one
 * participant to initiate a one-to-one PTC session) is initiated by or sent to
 * the PTC target. Accordingly, the IRI-POI in the PTC server generates the xIRI
 * when the following events are detected:
 *
 * - when the PTC server receives a SIP MESSAGE from a PTC target for an IPA.
 *
 * - when the PTC Server sends a SIP MESSAGE to the PTC target for an IPA.
 *
 * NOTE: The pTCTargetInformation choice PTCChatGroupID is not applicable for
 * this xIRI.
 *
 * 3GPP TS 33.128, clause 7.5.2.8.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCInstantPersonalAlert ::= SEQUENCE
 * {
 *     pTCTargetInformation          [1] PTCTargetInformation,
 *     pTCIPAPartyID                 [2] PTCTargetInformation,
 *     pTCIPADirection               [3] Direction
 * }
 * ```
 * 
 * @class
 */
export
class PTCInstantPersonalAlert {
    /**
     * @summary `pTCTargetInformation`.
     * @description
     *
     * Provide PTC target identity. At least one among IMPU, IMPI,
     * InstanceIdentifierURN shall be provided for PTCTargetInformation.
     *
     * 3GPP TS 33.128, clause 7.5.2.8.
     *
     * @public
     * @readonly
     */
    readonly pTCTargetInformation: PTCTargetInformation;
    /**
     * @summary `pTCIPAPartyID`.
     * @description
     *
     * Identifies the PTC participant that receives or has sent the Instant
     * Personal Alert to the target.
     *
     * 3GPP TS 33.128, clause 7.5.2.8.
     *
     * @public
     * @readonly
     */
    readonly pTCIPAPartyID: PTCTargetInformation;
    /**
     * @summary `pTCIPADirection`.
     * @description
     *
     * Identifies the direction (To PTC target or From PTC target) of the
     * Instant Personal Alert.
     *
     * 3GPP TS 33.128, clause 7.5.2.8.
     *
     * @public
     * @readonly
     */
    readonly pTCIPADirection: Direction;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        pTCTargetInformation: PTCTargetInformation,
        pTCIPAPartyID: PTCTargetInformation,
        pTCIPADirection: Direction,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.pTCTargetInformation = pTCTargetInformation;
        this.pTCIPAPartyID = pTCIPAPartyID;
        this.pTCIPADirection = pTCIPADirection;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PTCInstantPersonalAlert
     * @description
     * 
     * This takes an `object` and converts it to a `PTCInstantPersonalAlert`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCInstantPersonalAlert`.
     * @returns {PTCInstantPersonalAlert}
     */
    public static _from_object (_o: { [_K in keyof (PTCInstantPersonalAlert)]: (PTCInstantPersonalAlert)[_K] }): PTCInstantPersonalAlert {
        return new PTCInstantPersonalAlert(_o.pTCTargetInformation, _o.pTCIPAPartyID, _o.pTCIPADirection, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `pTCIPADirection`
         * @public
         * @static
         */

    public static _enum_for_pTCIPADirection = _enum_for_Direction;
}

/**
 * @summary The Leading Root Component Types of PTCInstantPersonalAlert
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCInstantPersonalAlert: $.ComponentSpec[] = [
    new $.ComponentSpec("pTCTargetInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pTCIPAPartyID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pTCIPADirection", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of PTCInstantPersonalAlert
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCInstantPersonalAlert: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCInstantPersonalAlert
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCInstantPersonalAlert: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCInstantPersonalAlert: $.ASN1Decoder<PTCInstantPersonalAlert> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCInstantPersonalAlert
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCInstantPersonalAlert (el: _Element): PTCInstantPersonalAlert {
    if (!_cached_decoder_for_PTCInstantPersonalAlert) { _cached_decoder_for_PTCInstantPersonalAlert = function (el: _Element): PTCInstantPersonalAlert {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("PTCInstantPersonalAlert contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pTCTargetInformation";
    sequence[1].name = "pTCIPAPartyID";
    sequence[2].name = "pTCIPADirection";
    let pTCTargetInformation!: PTCTargetInformation;
    let pTCIPAPartyID!: PTCTargetInformation;
    let pTCIPADirection!: Direction;
    pTCTargetInformation = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(sequence[0]);
    pTCIPAPartyID = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(sequence[1]);
    pTCIPADirection = $._decode_implicit<Direction>(() => _decode_Direction)(sequence[2]);
    return new PTCInstantPersonalAlert(
        pTCTargetInformation,
        pTCIPAPartyID,
        pTCIPADirection,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_PTCInstantPersonalAlert(el);
}

let _cached_encoder_for_PTCInstantPersonalAlert: $.ASN1Encoder<PTCInstantPersonalAlert> | null = null;

/**
 * @summary Encodes a(n) PTCInstantPersonalAlert into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCInstantPersonalAlert, encoded as an ASN.1 Element.
 */
export
function _encode_PTCInstantPersonalAlert (value: PTCInstantPersonalAlert, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCInstantPersonalAlert) { _cached_encoder_for_PTCInstantPersonalAlert = function (value: PTCInstantPersonalAlert, elGetter: $.ASN1Encoder<PTCInstantPersonalAlert>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PTCTargetInformation, $.BER)(value.pTCTargetInformation, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PTCTargetInformation, $.BER)(value.pTCIPAPartyID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Direction, $.BER)(value.pTCIPADirection, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PTCInstantPersonalAlert(value, elGetter);
}


/* eslint-enable */
