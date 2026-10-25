/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ServiceAddressInformation, _decode_ServiceAddressInformation, _encode_ServiceAddressInformation } from "../IN-CS3-SSF-SCF-datatypes/ServiceAddressInformation.ta.mjs";
// export { ServiceAddressInformation, _decode_ServiceAddressInformation, _encode_ServiceAddressInformation } from "../IN-CS3-SSF-SCF-datatypes/ServiceAddressInformation.ta.mjs";
import { type CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CallingPartyNumber.ta.mjs";
// export { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CallingPartyNumber.ta.mjs";
import { type LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../IN-CS3-SSF-SCF-datatypes/LocationNumber.ta.mjs";
// export { LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../IN-CS3-SSF-SCF-datatypes/LocationNumber.ta.mjs";
import { TerminalType, TerminalType_isdn /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_TerminalType, _encode_TerminalType, _enum_for_TerminalType } from "../IN-CS3-SSF-SCF-datatypes/TerminalType.ta.mjs";
// export { TerminalType, _enum_for_TerminalType, TerminalType_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminalType_dialPulse /* IMPORTED_LONG_ENUMERATION_ITEM */, dialPulse /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminalType_dtmf /* IMPORTED_LONG_ENUMERATION_ITEM */, dtmf /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminalType_isdn /* IMPORTED_LONG_ENUMERATION_ITEM */, isdn /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminalType_isdnNoDtmf /* IMPORTED_LONG_ENUMERATION_ITEM */, isdnNoDtmf /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminalType_spare /* IMPORTED_LONG_ENUMERATION_ITEM */, spare /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TerminalType, _encode_TerminalType } from "../IN-CS3-SSF-SCF-datatypes/TerminalType.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
import { type USIServiceIndicator, _decode_USIServiceIndicator, _encode_USIServiceIndicator } from "../IN-CS3-SSF-SCF-datatypes/USIServiceIndicator.ta.mjs";
// export { USIServiceIndicator, _decode_USIServiceIndicator, _encode_USIServiceIndicator } from "../IN-CS3-SSF-SCF-datatypes/USIServiceIndicator.ta.mjs";
import { type USIInformation, _decode_USIInformation, _encode_USIInformation } from "../IN-CS3-SSF-SCF-datatypes/USIInformation.ta.mjs";
// export { USIInformation, _decode_USIInformation, _encode_USIInformation } from "../IN-CS3-SSF-SCF-datatypes/USIInformation.ta.mjs";
import { type CUApplicationInd, _decode_CUApplicationInd, _encode_CUApplicationInd } from "../IN-CS3-SCF-CUSF-Datatypes/CUApplicationInd.ta.mjs";
// export { CUApplicationInd, _decode_CUApplicationInd, _encode_CUApplicationInd } from "../IN-CS3-SCF-CUSF-Datatypes/CUApplicationInd.ta.mjs";
import { type CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
import { type CallingPartySubaddress, _decode_CallingPartySubaddress, _encode_CallingPartySubaddress } from "../IN-CS3-SSF-SCF-datatypes/CallingPartySubaddress.ta.mjs";
// export { CallingPartySubaddress, _decode_CallingPartySubaddress, _encode_CallingPartySubaddress } from "../IN-CS3-SSF-SCF-datatypes/CallingPartySubaddress.ta.mjs";
import { type HighLayerCompatibility, _decode_HighLayerCompatibility, _encode_HighLayerCompatibility } from "../IN-CS3-SSF-SCF-datatypes/HighLayerCompatibility.ta.mjs";
// export { HighLayerCompatibility, _decode_HighLayerCompatibility, _encode_HighLayerCompatibility } from "../IN-CS3-SSF-SCF-datatypes/HighLayerCompatibility.ta.mjs";
import { type BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../IN-CS3-SSF-SCF-datatypes/BearerCapability.ta.mjs";
// export { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../IN-CS3-SSF-SCF-datatypes/BearerCapability.ta.mjs";
import { type GenericNumbers, _decode_GenericNumbers, _encode_GenericNumbers } from "../IN-CS3-SSF-SCF-datatypes/GenericNumbers.ta.mjs";
// export { GenericNumbers, _decode_GenericNumbers, _encode_GenericNumbers } from "../IN-CS3-SSF-SCF-datatypes/GenericNumbers.ta.mjs";


/**
 * @summary CallUnrelatedDpSpecificCommonParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallUnrelatedDpSpecificCommonParameters ::= SEQUENCE {
 *   serviceAddressInformation  [0]  ServiceAddressInformation,
 *   callingPartyNumber         [1]  CallingPartyNumber OPTIONAL,
 *   locationNumber             [2]  LocationNumber OPTIONAL,
 *   terminalType               [3]  TerminalType DEFAULT isdn,
 *   extensions                 [4]  Extensions OPTIONAL,
 *   uSIServiceIndicator        [5]  USIServiceIndicator OPTIONAL,
 *   uSIInformation             [6]  USIInformation OPTIONAL,
 *   cUApplicationInd           [7]  CUApplicationInd OPTIONAL,
 *   calledPartyNumber          [8]  CalledPartyNumber OPTIONAL,
 *   callingPartySubadress      [9]  CallingPartySubaddress OPTIONAL,
 *   highLayerCompatibility     [10]  HighLayerCompatibility OPTIONAL,
 *   bearerCapability           [11]  BearerCapability OPTIONAL,
 *   genericNumbers             [12]  GenericNumbers OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class CallUnrelatedDpSpecificCommonParameters {
    /**
     * @summary `serviceAddressInformation`.
     * @public
     * @readonly
     */
    readonly serviceAddressInformation: ServiceAddressInformation;
    /**
     * @summary `callingPartyNumber`.
     * @public
     * @readonly
     */
    readonly callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    /**
     * @summary `locationNumber`.
     * @public
     * @readonly
     */
    readonly locationNumber: OPTIONAL<LocationNumber>;
    /**
     * @summary `terminalType`.
     * @public
     * @readonly
     */
    readonly terminalType: OPTIONAL<TerminalType>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary `uSIServiceIndicator`.
     * @public
     * @readonly
     */
    readonly uSIServiceIndicator: OPTIONAL<USIServiceIndicator>;
    /**
     * @summary `uSIInformation`.
     * @public
     * @readonly
     */
    readonly uSIInformation: OPTIONAL<USIInformation>;
    /**
     * @summary `cUApplicationInd`.
     * @public
     * @readonly
     */
    readonly cUApplicationInd: OPTIONAL<CUApplicationInd>;
    /**
     * @summary `calledPartyNumber`.
     * @public
     * @readonly
     */
    readonly calledPartyNumber: OPTIONAL<CalledPartyNumber>;
    /**
     * @summary `callingPartySubadress`.
     * @public
     * @readonly
     */
    readonly callingPartySubadress: OPTIONAL<CallingPartySubaddress>;
    /**
     * @summary `highLayerCompatibility`.
     * @public
     * @readonly
     */
    readonly highLayerCompatibility: OPTIONAL<HighLayerCompatibility>;
    /**
     * @summary `bearerCapability`.
     * @public
     * @readonly
     */
    readonly bearerCapability: OPTIONAL<BearerCapability>;
    /**
     * @summary `genericNumbers`.
     * @public
     * @readonly
     */
    readonly genericNumbers: OPTIONAL<GenericNumbers>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        serviceAddressInformation: ServiceAddressInformation,
        callingPartyNumber?: OPTIONAL<CallingPartyNumber>,
        locationNumber?: OPTIONAL<LocationNumber>,
        terminalType?: OPTIONAL<TerminalType>,
        extensions?: OPTIONAL<Extensions>,
        uSIServiceIndicator?: OPTIONAL<USIServiceIndicator>,
        uSIInformation?: OPTIONAL<USIInformation>,
        cUApplicationInd?: OPTIONAL<CUApplicationInd>,
        calledPartyNumber?: OPTIONAL<CalledPartyNumber>,
        callingPartySubadress?: OPTIONAL<CallingPartySubaddress>,
        highLayerCompatibility?: OPTIONAL<HighLayerCompatibility>,
        bearerCapability?: OPTIONAL<BearerCapability>,
        genericNumbers?: OPTIONAL<GenericNumbers>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.serviceAddressInformation = serviceAddressInformation;
        this.callingPartyNumber = callingPartyNumber;
        this.locationNumber = locationNumber;
        this.terminalType = terminalType;
        this.extensions = extensions;
        this.uSIServiceIndicator = uSIServiceIndicator;
        this.uSIInformation = uSIInformation;
        this.cUApplicationInd = cUApplicationInd;
        this.calledPartyNumber = calledPartyNumber;
        this.callingPartySubadress = callingPartySubadress;
        this.highLayerCompatibility = highLayerCompatibility;
        this.bearerCapability = bearerCapability;
        this.genericNumbers = genericNumbers;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a CallUnrelatedDpSpecificCommonParameters
     * @description
     * 
     * This takes an `object` and converts it to a `CallUnrelatedDpSpecificCommonParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallUnrelatedDpSpecificCommonParameters`.
     * @returns {CallUnrelatedDpSpecificCommonParameters}
     */
    public static _from_object (_o: { [_K in keyof (CallUnrelatedDpSpecificCommonParameters)]: (CallUnrelatedDpSpecificCommonParameters)[_K] }): CallUnrelatedDpSpecificCommonParameters {
        return new CallUnrelatedDpSpecificCommonParameters(_o.serviceAddressInformation, _o.callingPartyNumber, _o.locationNumber, _o.terminalType, _o.extensions, _o.uSIServiceIndicator, _o.uSIInformation, _o.cUApplicationInd, _o.calledPartyNumber, _o.callingPartySubadress, _o.highLayerCompatibility, _o.bearerCapability, _o.genericNumbers, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `terminalType`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_terminalType (): _enum_for_TerminalType { return TerminalType_isdn; }        /**
         * @summary The enum used as the type of the component `terminalType`
         * @public
         * @static
         */

    public static _enum_for_terminalType: typeof _enum_for_TerminalType = _enum_for_TerminalType;
}

/**
 * @summary The Leading Root Component Types of CallUnrelatedDpSpecificCommonParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallUnrelatedDpSpecificCommonParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceAddressInformation", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("callingPartyNumber", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("locationNumber", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("terminalType", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("uSIServiceIndicator", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("uSIInformation", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("cUApplicationInd", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("calledPartyNumber", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("callingPartySubadress", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("highLayerCompatibility", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("bearerCapability", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("genericNumbers", true, $.hasTag(_TagClass.context, 12))
];

/**
 * @summary The Trailing Root Component Types of CallUnrelatedDpSpecificCommonParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallUnrelatedDpSpecificCommonParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallUnrelatedDpSpecificCommonParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallUnrelatedDpSpecificCommonParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallUnrelatedDpSpecificCommonParameters: $.ASN1Decoder<CallUnrelatedDpSpecificCommonParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallUnrelatedDpSpecificCommonParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallUnrelatedDpSpecificCommonParameters (el: _Element): CallUnrelatedDpSpecificCommonParameters {
    if (!_cached_decoder_for_CallUnrelatedDpSpecificCommonParameters) { _cached_decoder_for_CallUnrelatedDpSpecificCommonParameters = function (el: _Element): CallUnrelatedDpSpecificCommonParameters {
    let serviceAddressInformation!: ServiceAddressInformation;
    let callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    let locationNumber: OPTIONAL<LocationNumber>;
    let terminalType: OPTIONAL<TerminalType> = CallUnrelatedDpSpecificCommonParameters._default_value_for_terminalType;
    let extensions: OPTIONAL<Extensions>;
    let uSIServiceIndicator: OPTIONAL<USIServiceIndicator>;
    let uSIInformation: OPTIONAL<USIInformation>;
    let cUApplicationInd: OPTIONAL<CUApplicationInd>;
    let calledPartyNumber: OPTIONAL<CalledPartyNumber>;
    let callingPartySubadress: OPTIONAL<CallingPartySubaddress>;
    let highLayerCompatibility: OPTIONAL<HighLayerCompatibility>;
    let bearerCapability: OPTIONAL<BearerCapability>;
    let genericNumbers: OPTIONAL<GenericNumbers>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "serviceAddressInformation": (_el: _Element): void => { serviceAddressInformation = $._decode_implicit<ServiceAddressInformation>(() => _decode_ServiceAddressInformation)(_el); },
        "callingPartyNumber": (_el: _Element): void => { callingPartyNumber = $._decode_implicit<CallingPartyNumber>(() => _decode_CallingPartyNumber)(_el); },
        "locationNumber": (_el: _Element): void => { locationNumber = $._decode_implicit<LocationNumber>(() => _decode_LocationNumber)(_el); },
        "terminalType": (_el: _Element): void => { terminalType = $._decode_implicit<TerminalType>(() => _decode_TerminalType)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "uSIServiceIndicator": (_el: _Element): void => { uSIServiceIndicator = $._decode_explicit<USIServiceIndicator>(() => _decode_USIServiceIndicator)(_el); },
        "uSIInformation": (_el: _Element): void => { uSIInformation = $._decode_implicit<USIInformation>(() => _decode_USIInformation)(_el); },
        "cUApplicationInd": (_el: _Element): void => { cUApplicationInd = $._decode_explicit<CUApplicationInd>(() => _decode_CUApplicationInd)(_el); },
        "calledPartyNumber": (_el: _Element): void => { calledPartyNumber = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); },
        "callingPartySubadress": (_el: _Element): void => { callingPartySubadress = $._decode_implicit<CallingPartySubaddress>(() => _decode_CallingPartySubaddress)(_el); },
        "highLayerCompatibility": (_el: _Element): void => { highLayerCompatibility = $._decode_implicit<HighLayerCompatibility>(() => _decode_HighLayerCompatibility)(_el); },
        "bearerCapability": (_el: _Element): void => { bearerCapability = $._decode_explicit<BearerCapability>(() => _decode_BearerCapability)(_el); },
        "genericNumbers": (_el: _Element): void => { genericNumbers = $._decode_implicit<GenericNumbers>(() => _decode_GenericNumbers)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallUnrelatedDpSpecificCommonParameters,
        _extension_additions_list_spec_for_CallUnrelatedDpSpecificCommonParameters,
        _root_component_type_list_2_spec_for_CallUnrelatedDpSpecificCommonParameters,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CallUnrelatedDpSpecificCommonParameters(
        serviceAddressInformation,
        callingPartyNumber,
        locationNumber,
        terminalType,
        extensions,
        uSIServiceIndicator,
        uSIInformation,
        cUApplicationInd,
        calledPartyNumber,
        callingPartySubadress,
        highLayerCompatibility,
        bearerCapability,
        genericNumbers,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CallUnrelatedDpSpecificCommonParameters(el);
}

let _cached_encoder_for_CallUnrelatedDpSpecificCommonParameters: $.ASN1Encoder<CallUnrelatedDpSpecificCommonParameters> | null = null;

/**
 * @summary Encodes a(n) CallUnrelatedDpSpecificCommonParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallUnrelatedDpSpecificCommonParameters, encoded as an ASN.1 Element.
 */
export
function _encode_CallUnrelatedDpSpecificCommonParameters (value: CallUnrelatedDpSpecificCommonParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallUnrelatedDpSpecificCommonParameters) { _cached_encoder_for_CallUnrelatedDpSpecificCommonParameters = function (value: CallUnrelatedDpSpecificCommonParameters, elGetter: $.ASN1Encoder<CallUnrelatedDpSpecificCommonParameters>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(13 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ServiceAddressInformation, $.BER)(value.serviceAddressInformation, $.BER);
    if (value.callingPartyNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CallingPartyNumber, $.BER)(value.callingPartyNumber, $.BER);
    }
    if (value.locationNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_LocationNumber, $.BER)(value.locationNumber, $.BER);
    }
    if (value.terminalType !== undefined && !$.deepEq(value.terminalType, CallUnrelatedDpSpecificCommonParameters._default_value_for_terminalType)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 3, () => _encode_TerminalType, $.BER)(value.terminalType, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.uSIServiceIndicator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_USIServiceIndicator, $.BER)(value.uSIServiceIndicator, $.BER);
    }
    if (value.uSIInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_USIInformation, $.BER)(value.uSIInformation, $.BER);
    }
    if (value.cUApplicationInd !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 7, () => _encode_CUApplicationInd, $.BER)(value.cUApplicationInd, $.BER);
    }
    if (value.calledPartyNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_CalledPartyNumber, $.BER)(value.calledPartyNumber, $.BER);
    }
    if (value.callingPartySubadress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_CallingPartySubaddress, $.BER)(value.callingPartySubadress, $.BER);
    }
    if (value.highLayerCompatibility !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_HighLayerCompatibility, $.BER)(value.highLayerCompatibility, $.BER);
    }
    if (value.bearerCapability !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 11, () => _encode_BearerCapability, $.BER)(value.bearerCapability, $.BER);
    }
    if (value.genericNumbers !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_GenericNumbers, $.BER)(value.genericNumbers, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CallUnrelatedDpSpecificCommonParameters(value, elGetter);
}


/* eslint-enable */
