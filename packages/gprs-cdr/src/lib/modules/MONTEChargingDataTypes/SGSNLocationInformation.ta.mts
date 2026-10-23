/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CurrentLocationRetrieved, _decode_CurrentLocationRetrieved, _encode_CurrentLocationRetrieved, _enum_for_CurrentLocationRetrieved } from "../MONTEChargingDataTypes/CurrentLocationRetrieved.ta.mjs";
import { UserCSGInformation, _decode_UserCSGInformation, _encode_UserCSGInformation } from "../MONTEChargingDataTypes/UserCSGInformation.ta.mjs";


/**
 * @summary SGSNLocationInformation
 * @description
 *
 * Location information from an SGSN, which is one of the
 * MECNs. TS 32.278 uses cell (CGI/ECGI) and RAI granularity,
 * and TA/RA accuracy. It does not define these octet strings.
 * It also does not describe location area, service area,
 * geographical information, geodetic information, age of
 * location, or closed subscriber group information.
 * Clause 6.3.2.1 defers the formal parameter definition to
 * TS 32.298.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 4.2, 5.1, 6.1.3.2 and 6.3.2.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SGSNLocationInformation ::= SEQUENCE {
 *    cellGlobalIdentity         [0] IMPLICIT OCTET STRING OPTIONAL,
 *    locationAreaIdentity       [1] IMPLICIT OCTET STRING OPTIONAL,
 *    serviceAreaIdentity        [2] IMPLICIT OCTET STRING OPTIONAL,
 *    routingAreaIdentity        [3] IMPLICIT OCTET STRING OPTIONAL,
 *    geographicalInformation    [4] IMPLICIT OCTET STRING OPTIONAL,
 *    geodeticInformation        [5] IMPLICIT OCTET STRING OPTIONAL,
 *    currentLocationRetrieved   [6] IMPLICIT CurrentLocationRetrieved OPTIONAL,
 *    ageOfLocationInformation   [7] IMPLICIT INTEGER OPTIONAL,
 *    userCSGInformation         [8] IMPLICIT UserCSGInformation OPTIONAL}
 * ```
 * 
 * @class
 */
export
class SGSNLocationInformation {
    /**
     * @summary `cellGlobalIdentity`.
     * @description
     *
     * Cell identity at CGI granularity. Cell level (CGI/ECGI)
     * is one accuracy TS 32.278 allows, and a cell is one area
     * element used when counting UEs. The octet encoding is not
     * defined in TS 32.278.
     *
     * 3GPP TS 32.278 V19.0.0 clauses 5.1 and 6.1.3.2.
     *
     * @public
     * @readonly
     */
    readonly cellGlobalIdentity: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `locationAreaIdentity`.
     * @description
     *
     * TS 32.278 V19.0.0 does not describe this component. The
     * area elements it does name are RAIs and TAIs. Clause
     * 6.3.2.1 defers the formal definition to TS 32.298.
     *
     * @public
     * @readonly
     */
    readonly locationAreaIdentity: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `serviceAreaIdentity`.
     * @description
     *
     * TS 32.278 V19.0.0 does not describe this component.
     * Clause 6.3.2.1 defers the formal definition to TS 32.298.
     *
     * @public
     * @readonly
     */
    readonly serviceAreaIdentity: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `routingAreaIdentity`.
     * @description
     *
     * Routing area identity (RAI). An RAI is an area element
     * used when counting UEs, and TA/RA is an accuracy allowed
     * for location reporting. The octet encoding is not defined
     * in TS 32.278.
     *
     * 3GPP TS 32.278 V19.0.0 clauses 5.1 and 6.1.3.2.
     *
     * @public
     * @readonly
     */
    readonly routingAreaIdentity: OPTIONAL<OCTET_STRING>;
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

    constructor (
        cellGlobalIdentity?: OPTIONAL<OCTET_STRING>,
        locationAreaIdentity?: OPTIONAL<OCTET_STRING>,
        serviceAreaIdentity?: OPTIONAL<OCTET_STRING>,
        routingAreaIdentity?: OPTIONAL<OCTET_STRING>,
        geographicalInformation?: OPTIONAL<OCTET_STRING>,
        geodeticInformation?: OPTIONAL<OCTET_STRING>,
        currentLocationRetrieved?: OPTIONAL<CurrentLocationRetrieved>,
        ageOfLocationInformation?: OPTIONAL<INTEGER>,
        userCSGInformation?: OPTIONAL<UserCSGInformation>
    ) {
        this.cellGlobalIdentity = cellGlobalIdentity;
        this.locationAreaIdentity = locationAreaIdentity;
        this.serviceAreaIdentity = serviceAreaIdentity;
        this.routingAreaIdentity = routingAreaIdentity;
        this.geographicalInformation = geographicalInformation;
        this.geodeticInformation = geodeticInformation;
        this.currentLocationRetrieved = currentLocationRetrieved;
        this.ageOfLocationInformation = ageOfLocationInformation;
        this.userCSGInformation = userCSGInformation;
    }

    /**
     * @summary Restructures an object into a SGSNLocationInformation
     * @description
     * 
     * This takes an `object` and converts it to a `SGSNLocationInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SGSNLocationInformation`.
     * @returns {SGSNLocationInformation}
     */
    public static _from_object (_o: { [_K in keyof (SGSNLocationInformation)]: (SGSNLocationInformation)[_K] }): SGSNLocationInformation {
        return new SGSNLocationInformation(_o.cellGlobalIdentity, _o.locationAreaIdentity, _o.serviceAreaIdentity, _o.routingAreaIdentity, _o.geographicalInformation, _o.geodeticInformation, _o.currentLocationRetrieved, _o.ageOfLocationInformation, _o.userCSGInformation);
    }

        /**
         * @summary The enum used as the type of the component `currentLocationRetrieved`
         * @public
         * @static
         */

    public static _enum_for_currentLocationRetrieved = _enum_for_CurrentLocationRetrieved;
}

/**
 * @summary The Leading Root Component Types of SGSNLocationInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SGSNLocationInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("cellGlobalIdentity", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("locationAreaIdentity", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serviceAreaIdentity", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("routingAreaIdentity", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("geographicalInformation", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("geodeticInformation", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("currentLocationRetrieved", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("ageOfLocationInformation", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("userCSGInformation", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of SGSNLocationInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SGSNLocationInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SGSNLocationInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SGSNLocationInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SGSNLocationInformation: $.ASN1Decoder<SGSNLocationInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SGSNLocationInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SGSNLocationInformation (el: _Element): SGSNLocationInformation {
    if (!_cached_decoder_for_SGSNLocationInformation) { _cached_decoder_for_SGSNLocationInformation = function (el: _Element): SGSNLocationInformation {
    let cellGlobalIdentity: OPTIONAL<OCTET_STRING>;
    let locationAreaIdentity: OPTIONAL<OCTET_STRING>;
    let serviceAreaIdentity: OPTIONAL<OCTET_STRING>;
    let routingAreaIdentity: OPTIONAL<OCTET_STRING>;
    let geographicalInformation: OPTIONAL<OCTET_STRING>;
    let geodeticInformation: OPTIONAL<OCTET_STRING>;
    let currentLocationRetrieved: OPTIONAL<CurrentLocationRetrieved>;
    let ageOfLocationInformation: OPTIONAL<INTEGER>;
    let userCSGInformation: OPTIONAL<UserCSGInformation>;
    const callbacks: $.DecodingMap = {
        "cellGlobalIdentity": (_el: _Element): void => { cellGlobalIdentity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "locationAreaIdentity": (_el: _Element): void => { locationAreaIdentity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceAreaIdentity": (_el: _Element): void => { serviceAreaIdentity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "routingAreaIdentity": (_el: _Element): void => { routingAreaIdentity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "geographicalInformation": (_el: _Element): void => { geographicalInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "geodeticInformation": (_el: _Element): void => { geodeticInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "currentLocationRetrieved": (_el: _Element): void => { currentLocationRetrieved = $._decode_implicit<CurrentLocationRetrieved>(() => _decode_CurrentLocationRetrieved)(_el); },
        "ageOfLocationInformation": (_el: _Element): void => { ageOfLocationInformation = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "userCSGInformation": (_el: _Element): void => { userCSGInformation = $._decode_implicit<UserCSGInformation>(() => _decode_UserCSGInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SGSNLocationInformation,
        _extension_additions_list_spec_for_SGSNLocationInformation,
        _root_component_type_list_2_spec_for_SGSNLocationInformation,
        undefined,
    );
    return new SGSNLocationInformation(
        cellGlobalIdentity,
        locationAreaIdentity,
        serviceAreaIdentity,
        routingAreaIdentity,
        geographicalInformation,
        geodeticInformation,
        currentLocationRetrieved,
        ageOfLocationInformation,
        userCSGInformation
    );
}; }
    return _cached_decoder_for_SGSNLocationInformation(el);
}

let _cached_encoder_for_SGSNLocationInformation: $.ASN1Encoder<SGSNLocationInformation> | null = null;

/**
 * @summary Encodes a(n) SGSNLocationInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SGSNLocationInformation, encoded as an ASN.1 Element.
 */
export
function _encode_SGSNLocationInformation (value: SGSNLocationInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SGSNLocationInformation) { _cached_encoder_for_SGSNLocationInformation = function (value: SGSNLocationInformation, _elGetter: $.ASN1Encoder<SGSNLocationInformation>): _Element {
    const _components: _Element[] = [];
    if (value.cellGlobalIdentity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.cellGlobalIdentity, $.BER));
    }
    if (value.locationAreaIdentity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.locationAreaIdentity, $.BER));
    }
    if (value.serviceAreaIdentity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.serviceAreaIdentity, $.BER));
    }
    if (value.routingAreaIdentity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.routingAreaIdentity, $.BER));
    }
    if (value.geographicalInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.geographicalInformation, $.BER));
    }
    if (value.geodeticInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.geodeticInformation, $.BER));
    }
    if (value.currentLocationRetrieved !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_CurrentLocationRetrieved, $.BER)(value.currentLocationRetrieved, $.BER));
    }
    if (value.ageOfLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.ageOfLocationInformation, $.BER));
    }
    if (value.userCSGInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_UserCSGInformation, $.BER)(value.userCSGInformation, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SGSNLocationInformation(value, elGetter);
}


/* eslint-enable */
