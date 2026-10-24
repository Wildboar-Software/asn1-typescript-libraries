/* eslint-disable */
import {
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CurrentLocationRetrieved, _decode_CurrentLocationRetrieved, _encode_CurrentLocationRetrieved, _enum_for_CurrentLocationRetrieved } from "../MONTEChargingDataTypes/CurrentLocationRetrieved.ta.mjs";
import { UserCSGInformation, _decode_UserCSGInformation, _encode_UserCSGInformation } from "../MONTEChargingDataTypes/UserCSGInformation.ta.mjs";


/**
 * @summary MMELocationInformation
 * @description
 *
 * Location information from an MME, which is one of the MECNs.
 * TS 32.278 uses cell (CGI/ECGI), eNodeB, and TAI granularity
 * for Monitoring Event location. It does not define these octet
 * strings. It also does not describe geographical information,
 * geodetic information, age of location, or closed subscriber
 * group information. Clause 6.3.2.1 defers the formal parameter
 * definition to TS 32.298.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 4.2, 5.1, 6.1.3.2 and 6.3.2.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMELocationInformation ::= SEQUENCE {
 *    eUTRANCellGlobalIdentity   [0] IMPLICIT OCTET STRING OPTIONAL,
 *    trackingAreaIdentity       [1] IMPLICIT OCTET STRING OPTIONAL,
 *    geographicalInformation    [2] IMPLICIT OCTET STRING OPTIONAL,
 *    geodeticInformation        [3] IMPLICIT OCTET STRING OPTIONAL,
 *    currentLocationRetrieved   [4] IMPLICIT CurrentLocationRetrieved OPTIONAL,
 *    ageOfLocationInformation   [5] IMPLICIT INTEGER OPTIONAL,
 *    userCSGInformation         [6] IMPLICIT UserCSGInformation OPTIONAL,
 *    eNodeBID                   [7] IMPLICIT OCTET STRING OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MMELocationInformation {
    /**
     * @summary `eUTRANCellGlobalIdentity`.
     * @description
     *
     * Cell identity at ECGI granularity. Cell level (CGI/ECGI)
     * is one accuracy TS 32.278 allows, and a cell is one area
     * element used when counting UEs. The octet encoding is not
     * defined in TS 32.278.
     *
     * 3GPP TS 32.278 V19.0.0 clauses 5.1 and 6.1.3.2.
     *
     * @public
     * @readonly
     */
    readonly eUTRANCellGlobalIdentity: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `trackingAreaIdentity`.
     * @description
     *
     * Tracking area identity (TAI). A TAI is an area element
     * used when counting UEs, and TA/RA is an accuracy allowed
     * for location reporting. The octet encoding is not defined
     * in TS 32.278.
     *
     * 3GPP TS 32.278 V19.0.0 clauses 5.1 and 6.1.3.2.
     *
     * @public
     * @readonly
     */
    readonly trackingAreaIdentity: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `geographicalInformation`.
     * @description
     *
     * TS 32.278 V19.0.0 does not describe this component.
     * Clause 6.3.2.1 defers the formal definition to TS 32.298.
     *
     * @public
     * @readonly
     */
    readonly geographicalInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `geodeticInformation`.
     * @description
     *
     * TS 32.278 V19.0.0 does not describe this component.
     * Clause 6.3.2.1 defers the formal definition to TS 32.298.
     *
     * @public
     * @readonly
     */
    readonly geodeticInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `currentLocationRetrieved`.
     * @description
     *
     * See `CurrentLocationRetrieved`. TS 32.278 does not define
     * it. Whether the configuration request asked for the
     * current location or the last known location is
     * `LocationType` on `MECORecord`.
     *
     * 3GPP TS 32.278 V19.0.0 clauses 6.1.3.2 and 6.3.2.1.
     *
     * @public
     * @readonly
     */
    readonly currentLocationRetrieved: OPTIONAL<CurrentLocationRetrieved>;
    /**
     * @summary `ageOfLocationInformation`.
     * @description
     *
     * TS 32.278 V19.0.0 does not describe this component.
     * Clause 6.3.2.1 defers the formal definition to TS 32.298.
     *
     * @public
     * @readonly
     */
    readonly ageOfLocationInformation: OPTIONAL<INTEGER>;
    /**
     * @summary `userCSGInformation`.
     * @description
     *
     * TS 32.278 V19.0.0 does not describe closed subscriber
     * group information. Clause 6.3.2.1 defers the formal
     * definition to TS 32.298.
     *
     * @public
     * @readonly
     */
    readonly userCSGInformation: OPTIONAL<UserCSGInformation>;
    /**
     * @summary `eNodeBID`.
     * @description
     *
     * eNodeB identity. An eNodeB is both an accuracy level for
     * location reporting and an area element used when counting
     * UEs. The octet encoding is not defined in TS 32.278.
     *
     * 3GPP TS 32.278 V19.0.0 clauses 5.1 and 6.1.3.2.
     *
     * @public
     * @readonly
     */
    readonly eNodeBID: OPTIONAL<OCTET_STRING>;

    constructor (
        eUTRANCellGlobalIdentity?: OPTIONAL<OCTET_STRING>,
        trackingAreaIdentity?: OPTIONAL<OCTET_STRING>,
        geographicalInformation?: OPTIONAL<OCTET_STRING>,
        geodeticInformation?: OPTIONAL<OCTET_STRING>,
        currentLocationRetrieved?: OPTIONAL<CurrentLocationRetrieved>,
        ageOfLocationInformation?: OPTIONAL<INTEGER>,
        userCSGInformation?: OPTIONAL<UserCSGInformation>,
        eNodeBID?: OPTIONAL<OCTET_STRING>
    ) {
        this.eUTRANCellGlobalIdentity = eUTRANCellGlobalIdentity;
        this.trackingAreaIdentity = trackingAreaIdentity;
        this.geographicalInformation = geographicalInformation;
        this.geodeticInformation = geodeticInformation;
        this.currentLocationRetrieved = currentLocationRetrieved;
        this.ageOfLocationInformation = ageOfLocationInformation;
        this.userCSGInformation = userCSGInformation;
        this.eNodeBID = eNodeBID;
    }

    /**
     * @summary Restructures an object into a MMELocationInformation
     * @description
     * 
     * This takes an `object` and converts it to a `MMELocationInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMELocationInformation`.
     * @returns {MMELocationInformation}
     */
    public static _from_object (_o: { [_K in keyof (MMELocationInformation)]: (MMELocationInformation)[_K] }): MMELocationInformation {
        return new MMELocationInformation(_o.eUTRANCellGlobalIdentity, _o.trackingAreaIdentity, _o.geographicalInformation, _o.geodeticInformation, _o.currentLocationRetrieved, _o.ageOfLocationInformation, _o.userCSGInformation, _o.eNodeBID);
    }

        /**
         * @summary The enum used as the type of the component `currentLocationRetrieved`
         * @public
         * @static
         */

    public static _enum_for_currentLocationRetrieved = _enum_for_CurrentLocationRetrieved;
}

/**
 * @summary The Leading Root Component Types of MMELocationInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMELocationInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("eUTRANCellGlobalIdentity", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("trackingAreaIdentity", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("geographicalInformation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("geodeticInformation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("currentLocationRetrieved", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("ageOfLocationInformation", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("userCSGInformation", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("eNodeBID", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of MMELocationInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMELocationInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMELocationInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMELocationInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMELocationInformation: $.ASN1Decoder<MMELocationInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMELocationInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMELocationInformation (el: _Element): MMELocationInformation {
    if (!_cached_decoder_for_MMELocationInformation) { _cached_decoder_for_MMELocationInformation = function (el: _Element): MMELocationInformation {
    let eUTRANCellGlobalIdentity: OPTIONAL<OCTET_STRING>;
    let trackingAreaIdentity: OPTIONAL<OCTET_STRING>;
    let geographicalInformation: OPTIONAL<OCTET_STRING>;
    let geodeticInformation: OPTIONAL<OCTET_STRING>;
    let currentLocationRetrieved: OPTIONAL<CurrentLocationRetrieved>;
    let ageOfLocationInformation: OPTIONAL<INTEGER>;
    let userCSGInformation: OPTIONAL<UserCSGInformation>;
    let eNodeBID: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "eUTRANCellGlobalIdentity": (_el: _Element): void => { eUTRANCellGlobalIdentity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "trackingAreaIdentity": (_el: _Element): void => { trackingAreaIdentity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "geographicalInformation": (_el: _Element): void => { geographicalInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "geodeticInformation": (_el: _Element): void => { geodeticInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "currentLocationRetrieved": (_el: _Element): void => { currentLocationRetrieved = $._decode_implicit<CurrentLocationRetrieved>(() => _decode_CurrentLocationRetrieved)(_el); },
        "ageOfLocationInformation": (_el: _Element): void => { ageOfLocationInformation = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "userCSGInformation": (_el: _Element): void => { userCSGInformation = $._decode_implicit<UserCSGInformation>(() => _decode_UserCSGInformation)(_el); },
        "eNodeBID": (_el: _Element): void => { eNodeBID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMELocationInformation,
        _extension_additions_list_spec_for_MMELocationInformation,
        _root_component_type_list_2_spec_for_MMELocationInformation,
        undefined,
    );
    return new MMELocationInformation(
        eUTRANCellGlobalIdentity,
        trackingAreaIdentity,
        geographicalInformation,
        geodeticInformation,
        currentLocationRetrieved,
        ageOfLocationInformation,
        userCSGInformation,
        eNodeBID
    );
}; }
    return _cached_decoder_for_MMELocationInformation(el);
}

let _cached_encoder_for_MMELocationInformation: $.ASN1Encoder<MMELocationInformation> | null = null;

/**
 * @summary Encodes a(n) MMELocationInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMELocationInformation, encoded as an ASN.1 Element.
 */
export
function _encode_MMELocationInformation (value: MMELocationInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMELocationInformation) { _cached_encoder_for_MMELocationInformation = function (value: MMELocationInformation, _elGetter: $.ASN1Encoder<MMELocationInformation>): _Element {
    const _components: _Element[] = [];
    if (value.eUTRANCellGlobalIdentity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.eUTRANCellGlobalIdentity, $.BER));
    }
    if (value.trackingAreaIdentity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.trackingAreaIdentity, $.BER));
    }
    if (value.geographicalInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.geographicalInformation, $.BER));
    }
    if (value.geodeticInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.geodeticInformation, $.BER));
    }
    if (value.currentLocationRetrieved !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_CurrentLocationRetrieved, $.BER)(value.currentLocationRetrieved, $.BER));
    }
    if (value.ageOfLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.ageOfLocationInformation, $.BER));
    }
    if (value.userCSGInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_UserCSGInformation, $.BER)(value.userCSGInformation, $.BER));
    }
    if (value.eNodeBID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.eNodeBID, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MMELocationInformation(value, elGetter);
}


/* eslint-enable */
