/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MCServiceIdentitiesOrGroupID, _decode_MCServiceIdentitiesOrGroupID, _encode_MCServiceIdentitiesOrGroupID } from "../TS33128Payloads/MCServiceIdentitiesOrGroupID.ta.mjs";
// export { MCServiceIdentitiesOrGroupID, _decode_MCServiceIdentitiesOrGroupID, _encode_MCServiceIdentitiesOrGroupID } from "../TS33128Payloads/MCServiceIdentitiesOrGroupID.ta.mjs";
import { Direction, _decode_Direction, _encode_Direction, _enum_for_Direction } from "../TS33128Payloads/Direction.ta.mjs";
// export { Direction, _enum_for_Direction, Direction_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Direction, _encode_Direction } from "../TS33128Payloads/Direction.ta.mjs";
import { MCServiceID, _decode_MCServiceID, _encode_MCServiceID } from "../TS33128Payloads/MCServiceID.ta.mjs";
// export { MCServiceID, _decode_MCServiceID, _encode_MCServiceID } from "../TS33128Payloads/MCServiceID.ta.mjs";
import { MCServiceSessionInfo, _decode_MCServiceSessionInfo, _encode_MCServiceSessionInfo } from "../TS33128Payloads/MCServiceSessionInfo.ta.mjs";
// export { MCServiceSessionInfo, _decode_MCServiceSessionInfo, _encode_MCServiceSessionInfo } from "../TS33128Payloads/MCServiceSessionInfo.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";


/**
 * @summary MCXStartOfInterceptionWithEstablishedSession
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCXStartOfInterceptionWithEstablishedSession ::= SEQUENCE
 * {
 *     mCServiceIdentitiesOrGroupID  [1] MCServiceIdentitiesOrGroupID,
 *     mCServiceDirection            [2] Direction,
 *     mCServiceOriginatingID        [3] MCServiceID,
 *     mCServiceSessionInfo          [4] MCServiceSessionInfo,
 *     mCServiceParticipants         [5] SEQUENCE SIZE (1..MAX) OF MCServiceID OPTIONAL,
 *     location                      [6] Location OPTIONAL,
 *     mCServiceMediaStreamAvailable [7] BOOLEAN OPTIONAL,
 *     mCServiceBearerCapability     [8] UTF8String OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MCXStartOfInterceptionWithEstablishedSession {
    /**
     * @summary `mCServiceIdentitiesOrGroupID`.
     * @public
     * @readonly
     */
    readonly mCServiceIdentitiesOrGroupID: MCServiceIdentitiesOrGroupID;
    /**
     * @summary `mCServiceDirection`.
     * @public
     * @readonly
     */
    readonly mCServiceDirection: Direction;
    /**
     * @summary `mCServiceOriginatingID`.
     * @public
     * @readonly
     */
    readonly mCServiceOriginatingID: MCServiceID;
    /**
     * @summary `mCServiceSessionInfo`.
     * @public
     * @readonly
     */
    readonly mCServiceSessionInfo: MCServiceSessionInfo;
    /**
     * @summary `mCServiceParticipants`.
     * @public
     * @readonly
     */
    readonly mCServiceParticipants: OPTIONAL<MCServiceID[]>;
    /**
     * @summary `location`.
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary `mCServiceMediaStreamAvailable`.
     * @public
     * @readonly
     */
    readonly mCServiceMediaStreamAvailable: OPTIONAL<BOOLEAN>;
    /**
     * @summary `mCServiceBearerCapability`.
     * @public
     * @readonly
     */
    readonly mCServiceBearerCapability: OPTIONAL<UTF8String>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        mCServiceIdentitiesOrGroupID: MCServiceIdentitiesOrGroupID,
        mCServiceDirection: Direction,
        mCServiceOriginatingID: MCServiceID,
        mCServiceSessionInfo: MCServiceSessionInfo,
        mCServiceParticipants: OPTIONAL<MCServiceID[]>,
        location: OPTIONAL<Location>,
        mCServiceMediaStreamAvailable: OPTIONAL<BOOLEAN>,
        mCServiceBearerCapability: OPTIONAL<UTF8String>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.mCServiceIdentitiesOrGroupID = mCServiceIdentitiesOrGroupID;
        this.mCServiceDirection = mCServiceDirection;
        this.mCServiceOriginatingID = mCServiceOriginatingID;
        this.mCServiceSessionInfo = mCServiceSessionInfo;
        this.mCServiceParticipants = mCServiceParticipants;
        this.location = location;
        this.mCServiceMediaStreamAvailable = mCServiceMediaStreamAvailable;
        this.mCServiceBearerCapability = mCServiceBearerCapability;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MCXStartOfInterceptionWithEstablishedSession
     * @description
     * 
     * This takes an `object` and converts it to a `MCXStartOfInterceptionWithEstablishedSession`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MCXStartOfInterceptionWithEstablishedSession`.
     * @returns {MCXStartOfInterceptionWithEstablishedSession}
     */
    public static _from_object (_o: { [_K in keyof (MCXStartOfInterceptionWithEstablishedSession)]: (MCXStartOfInterceptionWithEstablishedSession)[_K] }): MCXStartOfInterceptionWithEstablishedSession {
        return new MCXStartOfInterceptionWithEstablishedSession(_o.mCServiceIdentitiesOrGroupID, _o.mCServiceDirection, _o.mCServiceOriginatingID, _o.mCServiceSessionInfo, _o.mCServiceParticipants, _o.location, _o.mCServiceMediaStreamAvailable, _o.mCServiceBearerCapability, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `mCServiceDirection`
         * @public
         * @static
         */

    public static _enum_for_mCServiceDirection = _enum_for_Direction;
}

/**
 * @summary The Leading Root Component Types of MCXStartOfInterceptionWithEstablishedSession
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MCXStartOfInterceptionWithEstablishedSession: $.ComponentSpec[] = [
    new $.ComponentSpec("mCServiceIdentitiesOrGroupID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mCServiceDirection", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mCServiceOriginatingID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("mCServiceSessionInfo", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mCServiceParticipants", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("mCServiceMediaStreamAvailable", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("mCServiceBearerCapability", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of MCXStartOfInterceptionWithEstablishedSession
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MCXStartOfInterceptionWithEstablishedSession: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MCXStartOfInterceptionWithEstablishedSession
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MCXStartOfInterceptionWithEstablishedSession: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MCXStartOfInterceptionWithEstablishedSession: $.ASN1Decoder<MCXStartOfInterceptionWithEstablishedSession> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCXStartOfInterceptionWithEstablishedSession
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCXStartOfInterceptionWithEstablishedSession (el: _Element): MCXStartOfInterceptionWithEstablishedSession {
    if (!_cached_decoder_for_MCXStartOfInterceptionWithEstablishedSession) { _cached_decoder_for_MCXStartOfInterceptionWithEstablishedSession = function (el: _Element): MCXStartOfInterceptionWithEstablishedSession {
    let mCServiceIdentitiesOrGroupID!: MCServiceIdentitiesOrGroupID;
    let mCServiceDirection!: Direction;
    let mCServiceOriginatingID!: MCServiceID;
    let mCServiceSessionInfo!: MCServiceSessionInfo;
    let mCServiceParticipants: OPTIONAL<MCServiceID[]>;
    let location: OPTIONAL<Location>;
    let mCServiceMediaStreamAvailable: OPTIONAL<BOOLEAN>;
    let mCServiceBearerCapability: OPTIONAL<UTF8String>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "mCServiceIdentitiesOrGroupID": (_el: _Element): void => { mCServiceIdentitiesOrGroupID = $._decode_explicit<MCServiceIdentitiesOrGroupID>(() => _decode_MCServiceIdentitiesOrGroupID)(_el); },
        "mCServiceDirection": (_el: _Element): void => { mCServiceDirection = $._decode_implicit<Direction>(() => _decode_Direction)(_el); },
        "mCServiceOriginatingID": (_el: _Element): void => { mCServiceOriginatingID = $._decode_implicit<MCServiceID>(() => _decode_MCServiceID)(_el); },
        "mCServiceSessionInfo": (_el: _Element): void => { mCServiceSessionInfo = $._decode_implicit<MCServiceSessionInfo>(() => _decode_MCServiceSessionInfo)(_el); },
        "mCServiceParticipants": (_el: _Element): void => {
            mCServiceParticipants = $._decode_implicit<MCServiceID[]>(() => $._decodeSequenceOf<MCServiceID>(() => _decode_MCServiceID))(_el);
            if (mCServiceParticipants.length < 1) {
                throw new ASN1SizeError("MCXStartOfInterceptionWithEstablishedSession.mCServiceParticipants violates SIZE constraint");
            }
        },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "mCServiceMediaStreamAvailable": (_el: _Element): void => { mCServiceMediaStreamAvailable = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "mCServiceBearerCapability": (_el: _Element): void => { mCServiceBearerCapability = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MCXStartOfInterceptionWithEstablishedSession,
        _extension_additions_list_spec_for_MCXStartOfInterceptionWithEstablishedSession,
        _root_component_type_list_2_spec_for_MCXStartOfInterceptionWithEstablishedSession,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MCXStartOfInterceptionWithEstablishedSession(
        mCServiceIdentitiesOrGroupID,
        mCServiceDirection,
        mCServiceOriginatingID,
        mCServiceSessionInfo,
        mCServiceParticipants,
        location,
        mCServiceMediaStreamAvailable,
        mCServiceBearerCapability,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MCXStartOfInterceptionWithEstablishedSession(el);
}

let _cached_encoder_for_MCXStartOfInterceptionWithEstablishedSession: $.ASN1Encoder<MCXStartOfInterceptionWithEstablishedSession> | null = null;

/**
 * @summary Encodes a(n) MCXStartOfInterceptionWithEstablishedSession into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCXStartOfInterceptionWithEstablishedSession, encoded as an ASN.1 Element.
 */
export
function _encode_MCXStartOfInterceptionWithEstablishedSession (value: MCXStartOfInterceptionWithEstablishedSession, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCXStartOfInterceptionWithEstablishedSession) { _cached_encoder_for_MCXStartOfInterceptionWithEstablishedSession = function (value: MCXStartOfInterceptionWithEstablishedSession, elGetter: $.ASN1Encoder<MCXStartOfInterceptionWithEstablishedSession>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(8 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_MCServiceIdentitiesOrGroupID, $.BER)(value.mCServiceIdentitiesOrGroupID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Direction, $.BER)(value.mCServiceDirection, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_MCServiceID, $.BER)(value.mCServiceOriginatingID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_MCServiceSessionInfo, $.BER)(value.mCServiceSessionInfo, $.BER);
    if (value.mCServiceParticipants !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<MCServiceID>(() => _encode_MCServiceID, $.BER), $.BER)(value.mCServiceParticipants, $.BER);
    }
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    if (value.mCServiceMediaStreamAvailable !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.mCServiceMediaStreamAvailable, $.BER);
    }
    if (value.mCServiceBearerCapability !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeUTF8String, $.BER)(value.mCServiceBearerCapability, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MCXStartOfInterceptionWithEstablishedSession(value, elGetter);
}


/* eslint-enable */
