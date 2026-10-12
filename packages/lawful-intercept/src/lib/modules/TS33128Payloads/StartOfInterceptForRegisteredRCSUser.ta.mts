/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RCSIdentity, _decode_RCSIdentity, _encode_RCSIdentity } from "../TS33128Payloads/RCSIdentity.ta.mjs";
// export { RCSIdentity, _decode_RCSIdentity, _encode_RCSIdentity } from "../TS33128Payloads/RCSIdentity.ta.mjs";
import { RCSRegistrationInformation, _decode_RCSRegistrationInformation, _encode_RCSRegistrationInformation } from "../TS33128Payloads/RCSRegistrationInformation.ta.mjs";
// export { RCSRegistrationInformation, _decode_RCSRegistrationInformation, _encode_RCSRegistrationInformation } from "../TS33128Payloads/RCSRegistrationInformation.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { AdditionalInstanceLocation, _decode_AdditionalInstanceLocation, _encode_AdditionalInstanceLocation } from "../TS33128Payloads/AdditionalInstanceLocation.ta.mjs";
// export { AdditionalInstanceLocation, _decode_AdditionalInstanceLocation, _encode_AdditionalInstanceLocation } from "../TS33128Payloads/AdditionalInstanceLocation.ta.mjs";


/**
 * @summary StartOfInterceptForRegisteredRCSUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StartOfInterceptForRegisteredRCSUser ::= SEQUENCE
 * {
 *     rCSTargetIdentities        [1] SEQUENCE SIZE (1..MAX) OF RCSIdentity,
 *     rCSRegistrationInformation [2] SEQUENCE SIZE (1..MAX) OF RCSRegistrationInformation,
 *     userOnline                 [3] BOOLEAN,
 *     location                   [4] Location OPTIONAL,
 *     additionalInstanceLocation [5] SEQUENCE SIZE (1..MAX) OF AdditionalInstanceLocation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class StartOfInterceptForRegisteredRCSUser {
    /**
     * @summary `rCSTargetIdentities`.
     * @public
     * @readonly
     */
    readonly rCSTargetIdentities: RCSIdentity[];
    /**
     * @summary `rCSRegistrationInformation`.
     * @public
     * @readonly
     */
    readonly rCSRegistrationInformation: RCSRegistrationInformation[];
    /**
     * @summary `userOnline`.
     * @public
     * @readonly
     */
    readonly userOnline: BOOLEAN;
    /**
     * @summary `location`.
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary `additionalInstanceLocation`.
     * @public
     * @readonly
     */
    readonly additionalInstanceLocation: OPTIONAL<AdditionalInstanceLocation[]>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        rCSTargetIdentities: RCSIdentity[],
        rCSRegistrationInformation: RCSRegistrationInformation[],
        userOnline: BOOLEAN,
        location: OPTIONAL<Location>,
        additionalInstanceLocation: OPTIONAL<AdditionalInstanceLocation[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.rCSTargetIdentities = rCSTargetIdentities;
        this.rCSRegistrationInformation = rCSRegistrationInformation;
        this.userOnline = userOnline;
        this.location = location;
        this.additionalInstanceLocation = additionalInstanceLocation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a StartOfInterceptForRegisteredRCSUser
     * @description
     * 
     * This takes an `object` and converts it to a `StartOfInterceptForRegisteredRCSUser`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StartOfInterceptForRegisteredRCSUser`.
     * @returns {StartOfInterceptForRegisteredRCSUser}
     */
    public static _from_object (_o: { [_K in keyof (StartOfInterceptForRegisteredRCSUser)]: (StartOfInterceptForRegisteredRCSUser)[_K] }): StartOfInterceptForRegisteredRCSUser {
        return new StartOfInterceptForRegisteredRCSUser(_o.rCSTargetIdentities, _o.rCSRegistrationInformation, _o.userOnline, _o.location, _o.additionalInstanceLocation, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of StartOfInterceptForRegisteredRCSUser
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StartOfInterceptForRegisteredRCSUser: $.ComponentSpec[] = [
    new $.ComponentSpec("rCSTargetIdentities", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("rCSRegistrationInformation", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("userOnline", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("additionalInstanceLocation", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of StartOfInterceptForRegisteredRCSUser
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StartOfInterceptForRegisteredRCSUser: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StartOfInterceptForRegisteredRCSUser
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StartOfInterceptForRegisteredRCSUser: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StartOfInterceptForRegisteredRCSUser: $.ASN1Decoder<StartOfInterceptForRegisteredRCSUser> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StartOfInterceptForRegisteredRCSUser
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StartOfInterceptForRegisteredRCSUser (el: _Element): StartOfInterceptForRegisteredRCSUser {
    if (!_cached_decoder_for_StartOfInterceptForRegisteredRCSUser) { _cached_decoder_for_StartOfInterceptForRegisteredRCSUser = function (el: _Element): StartOfInterceptForRegisteredRCSUser {
    let rCSTargetIdentities!: RCSIdentity[];
    let rCSRegistrationInformation!: RCSRegistrationInformation[];
    let userOnline!: BOOLEAN;
    let location: OPTIONAL<Location>;
    let additionalInstanceLocation: OPTIONAL<AdditionalInstanceLocation[]>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "rCSTargetIdentities": (_el: _Element): void => {
            rCSTargetIdentities = $._decode_implicit<RCSIdentity[]>(() => $._decodeSequenceOf<RCSIdentity>(() => _decode_RCSIdentity))(_el);
            if (rCSTargetIdentities.length < 1) {
                throw new ASN1SizeError("StartOfInterceptForRegisteredRCSUser.rCSTargetIdentities violates SIZE constraint");
            }
        },
        "rCSRegistrationInformation": (_el: _Element): void => {
            rCSRegistrationInformation = $._decode_implicit<RCSRegistrationInformation[]>(() => $._decodeSequenceOf<RCSRegistrationInformation>(() => _decode_RCSRegistrationInformation))(_el);
            if (rCSRegistrationInformation.length < 1) {
                throw new ASN1SizeError("StartOfInterceptForRegisteredRCSUser.rCSRegistrationInformation violates SIZE constraint");
            }
        },
        "userOnline": (_el: _Element): void => { userOnline = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "additionalInstanceLocation": (_el: _Element): void => {
            additionalInstanceLocation = $._decode_implicit<AdditionalInstanceLocation[]>(() => $._decodeSequenceOf<AdditionalInstanceLocation>(() => _decode_AdditionalInstanceLocation))(_el);
            if (additionalInstanceLocation.length < 1) {
                throw new ASN1SizeError("StartOfInterceptForRegisteredRCSUser.additionalInstanceLocation violates SIZE constraint");
            }
        }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StartOfInterceptForRegisteredRCSUser,
        _extension_additions_list_spec_for_StartOfInterceptForRegisteredRCSUser,
        _root_component_type_list_2_spec_for_StartOfInterceptForRegisteredRCSUser,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new StartOfInterceptForRegisteredRCSUser(
        rCSTargetIdentities,
        rCSRegistrationInformation,
        userOnline,
        location,
        additionalInstanceLocation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_StartOfInterceptForRegisteredRCSUser(el);
}

let _cached_encoder_for_StartOfInterceptForRegisteredRCSUser: $.ASN1Encoder<StartOfInterceptForRegisteredRCSUser> | null = null;

/**
 * @summary Encodes a(n) StartOfInterceptForRegisteredRCSUser into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StartOfInterceptForRegisteredRCSUser, encoded as an ASN.1 Element.
 */
export
function _encode_StartOfInterceptForRegisteredRCSUser (value: StartOfInterceptForRegisteredRCSUser, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StartOfInterceptForRegisteredRCSUser) { _cached_encoder_for_StartOfInterceptForRegisteredRCSUser = function (value: StartOfInterceptForRegisteredRCSUser, elGetter: $.ASN1Encoder<StartOfInterceptForRegisteredRCSUser>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<RCSIdentity>(() => _encode_RCSIdentity, $.BER), $.BER)(value.rCSTargetIdentities, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<RCSRegistrationInformation>(() => _encode_RCSRegistrationInformation, $.BER), $.BER)(value.rCSRegistrationInformation, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.userOnline, $.BER);
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    if (value.additionalInstanceLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<AdditionalInstanceLocation>(() => _encode_AdditionalInstanceLocation, $.BER), $.BER)(value.additionalInstanceLocation, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_StartOfInterceptForRegisteredRCSUser(value, elGetter);
}


/* eslint-enable */
