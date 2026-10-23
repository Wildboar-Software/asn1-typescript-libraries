/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_LocationType_locationEstimateType, _encode_LocationType_locationEstimateType, _enum_for_LocationType_locationEstimateType, LocationType_locationEstimateType } from "./LocationType-locationEstimateType.ta.mjs";
import { _decode_LocationType_deferredLocationEventType, _encode_LocationType_deferredLocationEventType, LocationType_deferredLocationEventType } from "./LocationType-deferredLocationEventType.ta.mjs";


/**
 * @summary LocationType
 * @description
 *
 * Type of location information being requested. Category M on the
 * mobile-terminated GMLC CDRs: LCS-RGMT-CDR, LCS-HGMT-CDR, and
 * LCS-VGMT-CDR. The LCS-GMO-CDR and LCS-GNI-CDR tables in this
 * specification do not contain Location Type.
 *
 * For online charging of an MT-LR, Location Type in LCS
 * Information (category Oc) carries the same information. MT-LR
 * is an external LCS client asking for the location of a target
 * UE. The R-GMLC, H-GMLC, and V-GMLC each produce their own CDR
 * for that request.
 *
 * TS 32.298 takes the location type defined in TS 29.002.
 * TS 32.271 does not define `locationEstimateType` or
 * `deferredLocationEventType`.
 *
 * 3GPP TS 32.271 V12.1.0 clauses 5.2.3.2, 6.1.3.2.1, 6.1.3.2.2,
 * 6.1.3.2.3, and 6.3.1.2.
 * 3GPP TS 32.298 V20.1.0 clauses 5.1.2.1.48, 5.1.2.2.29, and
 * 5.1.4.2.6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationType ::= SEQUENCE {
 *    locationEstimateType        [0] IMPLICIT ENUMERATED {
 *       currentLocation                 ( 0 ),
 *       currentOrLastKnownLocation      ( 1 ),
 *       initialLocation                 ( 2 ),
 *       ... ,
 *       activateDeferredLocation        ( 3 ),
 *       cancelDeferredLocation          ( 4 ),
 *       notificationVerificationOnly    ( 5 ) },
 *    ... ,
 *    deferredLocationEventType   [1] IMPLICIT BIT STRING {
 *       msAvailable  (0 ),
 *       enteringIntoArea  (1 ),
 *       leavingFromArea  (2 ),
 *       beingInsideArea  (3 ),
 *       periodicLDR  (4 )} ( SIZE( 1 .. 16 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class LocationType {
    /**
     * @summary `locationEstimateType`.
     * @description
     *
     * Requested kind of location information. TS 32.271 assigns
     * that role to Location Type as a whole and does not define
     * these values.
     *
     * 3GPP TS 32.271 V12.1.0 clauses 6.1.3.2.1, 6.1.3.2.2,
     * 6.1.3.2.3, and 6.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly locationEstimateType: LocationType_locationEstimateType;
    /**
     * @summary `deferredLocationEventType`.
     * @description
     *
     * Optional deferred-event indication on a location type.
     * TS 32.271 does not define this component or its named bits.
     * On an MT-LR, Location Type is the type of location
     * information being requested.
     *
     * 3GPP TS 32.271 V12.1.0 clauses 6.1.3.2.1, 6.1.3.2.2,
     * 6.1.3.2.3, and 6.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly deferredLocationEventType: OPTIONAL<LocationType_deferredLocationEventType>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        locationEstimateType: LocationType_locationEstimateType,
        deferredLocationEventType?: OPTIONAL<LocationType_deferredLocationEventType>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.locationEstimateType = locationEstimateType;
        this.deferredLocationEventType = deferredLocationEventType;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    
        if (this.deferredLocationEventType !== undefined && (this.deferredLocationEventType.length < 1 || this.deferredLocationEventType.length > 16)) {
            throw new ASN1SizeError("LocationType.deferredLocationEventType violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a LocationType
     * @description
     * 
     * This takes an `object` and converts it to a `LocationType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocationType`.
     * @returns {LocationType}
     */
    public static _from_object (_o: { [_K in keyof (LocationType)]: (LocationType)[_K] }): LocationType {
        return new LocationType(_o.locationEstimateType, _o.deferredLocationEventType, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `locationEstimateType`
         * @public
         * @static
         */

    public static _enum_for_locationEstimateType = _enum_for_LocationType_locationEstimateType;
}

/**
 * @summary The Leading Root Component Types of LocationType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocationType: $.ComponentSpec[] = [
    new $.ComponentSpec("locationEstimateType", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of LocationType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocationType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocationType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LocationType: $.ComponentSpec[] = [
    new $.ComponentSpec("deferredLocationEventType", true, $.hasTag(_TagClass.context, 1))
];

let _cached_decoder_for_LocationType: $.ASN1Decoder<LocationType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationType (el: _Element): LocationType {
    if (!_cached_decoder_for_LocationType) { _cached_decoder_for_LocationType = function (el: _Element): LocationType {
    let locationEstimateType!: LocationType_locationEstimateType;
    let deferredLocationEventType: OPTIONAL<LocationType_deferredLocationEventType>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "locationEstimateType": (_el: _Element): void => { locationEstimateType = $._decode_implicit<LocationType_locationEstimateType>(() => _decode_LocationType_locationEstimateType)(_el); },
        "deferredLocationEventType": (_el: _Element): void => { deferredLocationEventType = $._decode_implicit<LocationType_deferredLocationEventType>(() => _decode_LocationType_deferredLocationEventType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LocationType,
        _extension_additions_list_spec_for_LocationType,
        _root_component_type_list_2_spec_for_LocationType,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LocationType(
        locationEstimateType,
        deferredLocationEventType,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_LocationType(el);
}

let _cached_encoder_for_LocationType: $.ASN1Encoder<LocationType> | null = null;

/**
 * @summary Encodes a(n) LocationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationType, encoded as an ASN.1 Element.
 */
export
function _encode_LocationType (value: LocationType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationType) { _cached_encoder_for_LocationType = function (value: LocationType, _elGetter: $.ASN1Encoder<LocationType>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_LocationType_locationEstimateType, $.BER)(value.locationEstimateType, $.BER);
    if (value.deferredLocationEventType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_LocationType_deferredLocationEventType, $.BER)(value.deferredLocationEventType, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_LocationType(value, elGetter);
}


/* eslint-enable */
