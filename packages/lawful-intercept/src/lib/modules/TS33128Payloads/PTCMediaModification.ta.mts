/* eslint-disable */
import {
    type BOOLEAN,
    type OPTIONAL,
    type UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PTCTargetInformation, _decode_PTCTargetInformation, _encode_PTCTargetInformation } from "../TS33128Payloads/PTCTargetInformation.ta.mjs";
// export { PTCTargetInformation, _decode_PTCTargetInformation, _encode_PTCTargetInformation } from "../TS33128Payloads/PTCTargetInformation.ta.mjs";
import { Direction, _decode_Direction, _encode_Direction, _enum_for_Direction } from "../TS33128Payloads/Direction.ta.mjs";
// export { Direction, _enum_for_Direction, Direction_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Direction, _encode_Direction } from "../TS33128Payloads/Direction.ta.mjs";
import { PTCSessionInfo, _decode_PTCSessionInfo, _encode_PTCSessionInfo } from "../TS33128Payloads/PTCSessionInfo.ta.mjs";
// export { PTCSessionInfo, _decode_PTCSessionInfo, _encode_PTCSessionInfo } from "../TS33128Payloads/PTCSessionInfo.ta.mjs";


/**
 * @summary PTCMediaModification
 * @description
 * 
 * The IRI-POI present in the PTC server shall generate an xIRI containing a
 * PTCMediaModification record when the IRI-POI present in the PTC server
 * detects that a re-negotiation of the media parameters occurs during a PTC
 * session involving the PTC target. Accordingly, the IRI-POI in the PTC server
 * generates the xIRI when the following event is detected:
 *
 * - when the PTC server receives a SIP UPDATE or SIP reINVITE to indicate a PTC
 *   media modification on a PTC session being intercepted.
 *
 * 3GPP TS 33.128, clause 7.5.2.12.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCMediaModification ::= SEQUENCE
 * {
 *     pTCTargetInformation          [1] PTCTargetInformation,
 *     pTCDirection                  [2] Direction,
 *     pTCSessionInfo                [3] PTCSessionInfo,
 *     pTCMediaStreamAvail           [4] BOOLEAN OPTIONAL,
 *     pTCBearerCapability           [5] UTF8String
 * }
 * ```
 * 
 * @class
 */
export
class PTCMediaModification {
    /**
     * @summary `pTCTargetInformation`.
     * @description
     *
     * Provide PTC target identity. At least one among IMPU, IMPI,
     * InstanceIdentifierURN and PTCChatGroupID shall be provided for
     * PTCTargetInformation.
     *
     * 3GPP TS 33.128, clause 7.5.2.12.
     *
     * @public
     * @readonly
     */
    readonly pTCTargetInformation: PTCTargetInformation;
    /**
     * @summary `pTCDirection`.
     * @description
     *
     * Indicates the direction of the session relative to the target: "toTarget"
     * or "fromTarget".
     *
     * 3GPP TS 33.128, clause 7.5.2.12.
     *
     * @public
     * @readonly
     */
    readonly pTCDirection: Direction;
    /**
     * @summary `pTCSessionInfo`.
     * @description
     *
     * Shall provide PTC session information such as PTC Session URI and PTC
     * Session type (e.g. on-demand, pre-established, ad-hoc, pre-arranged,
     * group session).
     *
     * 3GPP TS 33.128, clause 7.5.2.12.
     *
     * @public
     * @readonly
     */
    readonly pTCSessionInfo: PTCSessionInfo;
    /**
     * @summary `pTCMediaStreamAvail`.
     * @description
     *
     * Shall include this parameter to indicate if the PTC target is able/not
     * able to receive media streams immediately. True indicates available for
     * media, while false indicates not able to accept media.
     *
     * 3GPP TS 33.128, clause 7.5.2.12.
     *
     * @public
     * @readonly
     */
    readonly pTCMediaStreamAvail: OPTIONAL<BOOLEAN>;
    /**
     * @summary `pTCBearerCapability`.
     * @description
     *
     * Shall provide when known the media characteristics information elements
     * of the PTC session, encoded in SDP format as per RFC 4566 [43] clause 5.
     *
     * 3GPP TS 33.128, clause 7.5.2.12.
     *
     * @public
     * @readonly
     */
    readonly pTCBearerCapability: UTF8String;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        pTCTargetInformation: PTCTargetInformation,
        pTCDirection: Direction,
        pTCSessionInfo: PTCSessionInfo,
        pTCMediaStreamAvail: OPTIONAL<BOOLEAN>,
        pTCBearerCapability: UTF8String,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.pTCTargetInformation = pTCTargetInformation;
        this.pTCDirection = pTCDirection;
        this.pTCSessionInfo = pTCSessionInfo;
        this.pTCMediaStreamAvail = pTCMediaStreamAvail;
        this.pTCBearerCapability = pTCBearerCapability;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PTCMediaModification
     * @description
     * 
     * This takes an `object` and converts it to a `PTCMediaModification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCMediaModification`.
     * @returns {PTCMediaModification}
     */
    public static _from_object (_o: { [_K in keyof (PTCMediaModification)]: (PTCMediaModification)[_K] }): PTCMediaModification {
        return new PTCMediaModification(_o.pTCTargetInformation, _o.pTCDirection, _o.pTCSessionInfo, _o.pTCMediaStreamAvail, _o.pTCBearerCapability, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `pTCDirection`
         * @public
         * @static
         */

    public static _enum_for_pTCDirection = _enum_for_Direction;
}

/**
 * @summary The Leading Root Component Types of PTCMediaModification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCMediaModification: $.ComponentSpec[] = [
    new $.ComponentSpec("pTCTargetInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pTCDirection", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pTCSessionInfo", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("pTCMediaStreamAvail", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pTCBearerCapability", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of PTCMediaModification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCMediaModification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCMediaModification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCMediaModification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCMediaModification: $.ASN1Decoder<PTCMediaModification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCMediaModification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCMediaModification (el: _Element): PTCMediaModification {
    if (!_cached_decoder_for_PTCMediaModification) { _cached_decoder_for_PTCMediaModification = function (el: _Element): PTCMediaModification {
    let pTCTargetInformation!: PTCTargetInformation;
    let pTCDirection!: Direction;
    let pTCSessionInfo!: PTCSessionInfo;
    let pTCMediaStreamAvail: OPTIONAL<BOOLEAN>;
    let pTCBearerCapability!: UTF8String;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "pTCTargetInformation": (_el: _Element): void => { pTCTargetInformation = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); },
        "pTCDirection": (_el: _Element): void => { pTCDirection = $._decode_implicit<Direction>(() => _decode_Direction)(_el); },
        "pTCSessionInfo": (_el: _Element): void => { pTCSessionInfo = $._decode_implicit<PTCSessionInfo>(() => _decode_PTCSessionInfo)(_el); },
        "pTCMediaStreamAvail": (_el: _Element): void => { pTCMediaStreamAvail = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "pTCBearerCapability": (_el: _Element): void => { pTCBearerCapability = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PTCMediaModification,
        _extension_additions_list_spec_for_PTCMediaModification,
        _root_component_type_list_2_spec_for_PTCMediaModification,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PTCMediaModification(
        pTCTargetInformation,
        pTCDirection,
        pTCSessionInfo,
        pTCMediaStreamAvail,
        pTCBearerCapability,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PTCMediaModification(el);
}

let _cached_encoder_for_PTCMediaModification: $.ASN1Encoder<PTCMediaModification> | null = null;

/**
 * @summary Encodes a(n) PTCMediaModification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCMediaModification, encoded as an ASN.1 Element.
 */
export
function _encode_PTCMediaModification (value: PTCMediaModification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCMediaModification) { _cached_encoder_for_PTCMediaModification = function (value: PTCMediaModification, elGetter: $.ASN1Encoder<PTCMediaModification>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PTCTargetInformation, $.BER)(value.pTCTargetInformation, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Direction, $.BER)(value.pTCDirection, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_PTCSessionInfo, $.BER)(value.pTCSessionInfo, $.BER);
    if (value.pTCMediaStreamAvail !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.pTCMediaStreamAvail, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeUTF8String, $.BER)(value.pTCBearerCapability, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PTCMediaModification(value, elGetter);
}


/* eslint-enable */
