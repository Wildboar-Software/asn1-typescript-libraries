/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ServiceAddressInformation, _decode_ServiceAddressInformation, _encode_ServiceAddressInformation } from "../IN-CS2-datatypes/ServiceAddressInformation.ta.mjs";
// export { ServiceAddressInformation, _decode_ServiceAddressInformation, _encode_ServiceAddressInformation } from "../IN-CS2-datatypes/ServiceAddressInformation.ta.mjs";
import { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-CS2-datatypes/CallingPartyNumber.ta.mjs";
// export { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-CS2-datatypes/CallingPartyNumber.ta.mjs";
import { LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../IN-CS2-datatypes/LocationNumber.ta.mjs";
// export { LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../IN-CS2-datatypes/LocationNumber.ta.mjs";
import { TerminalType, _enum_for_TerminalType, TerminalType_isdn /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_TerminalType, _encode_TerminalType } from "../IN-CS2-datatypes/TerminalType.ta.mjs";
// export { TerminalType, _enum_for_TerminalType, TerminalType_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminalType_dialPulse /* IMPORTED_LONG_ENUMERATION_ITEM */, dialPulse /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminalType_dtmf /* IMPORTED_LONG_ENUMERATION_ITEM */, dtmf /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminalType_isdn /* IMPORTED_LONG_ENUMERATION_ITEM */, isdn /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminalType_isdnNoDtmf /* IMPORTED_LONG_ENUMERATION_ITEM */, isdnNoDtmf /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminalType_spare /* IMPORTED_LONG_ENUMERATION_ITEM */, spare /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TerminalType, _encode_TerminalType } from "../IN-CS2-datatypes/TerminalType.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";


/**
 * @summary CallUnrelatedDpSpecificCommonParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallUnrelatedDpSpecificCommonParameters{PARAMETERS-BOUND:bound} ::= SEQUENCE {
 *   serviceAddressInformation  [0]  ServiceAddressInformation,
 *   callingPartyNumber         [1]  CallingPartyNumber{bound} OPTIONAL,
 *   locationNumber             [2]  LocationNumber{bound} OPTIONAL,
 *   terminalType               [3]  TerminalType DEFAULT isdn,
 *   extensions
 *     [4]  SEQUENCE SIZE (1..bound.&numOfExtensions) OF
 *            ExtensionField{{SupportedExtensions  {bound}}} OPTIONAL
 *   --    ...
 * }
 * ```
 * 
 * @class
 */
export
class CallUnrelatedDpSpecificCommonParameters {
    constructor (
        /**
         * @summary `serviceAddressInformation`.
         * @public
         * @readonly
         */
        readonly serviceAddressInformation: ServiceAddressInformation,
        /**
         * @summary `callingPartyNumber`.
         * @public
         * @readonly
         */
        readonly callingPartyNumber: OPTIONAL<CallingPartyNumber>,
        /**
         * @summary `locationNumber`.
         * @public
         * @readonly
         */
        readonly locationNumber: OPTIONAL<LocationNumber>,
        /**
         * @summary `terminalType`.
         * @public
         * @readonly
         */
        readonly terminalType: OPTIONAL<TerminalType>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

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
        return new CallUnrelatedDpSpecificCommonParameters(_o.serviceAddressInformation, _o.callingPartyNumber, _o.locationNumber, _o.terminalType, _o.extensions);
    }

    /**
     * @summary Getter that returns the default value for `terminalType`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_terminalType () { return TerminalType_isdn; }        /**
         * @summary The enum used as the type of the component `terminalType`
         * @public
         * @static
         */

    public static _enum_for_terminalType = _enum_for_TerminalType;
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
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 4))
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
    let extensions: OPTIONAL<ExtensionField[]>;
    const callbacks: $.DecodingMap = {
        "serviceAddressInformation": (_el: _Element): void => { serviceAddressInformation = $._decode_implicit<ServiceAddressInformation>(() => _decode_ServiceAddressInformation)(_el); },
        "callingPartyNumber": (_el: _Element): void => { callingPartyNumber = $._decode_implicit<CallingPartyNumber>(() => _decode_CallingPartyNumber)(_el); },
        "locationNumber": (_el: _Element): void => { locationNumber = $._decode_implicit<LocationNumber>(() => _decode_LocationNumber)(_el); },
        "terminalType": (_el: _Element): void => { terminalType = $._decode_implicit<TerminalType>(() => _decode_TerminalType)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallUnrelatedDpSpecificCommonParameters,
        _extension_additions_list_spec_for_CallUnrelatedDpSpecificCommonParameters,
        _root_component_type_list_2_spec_for_CallUnrelatedDpSpecificCommonParameters,
        undefined,
    );
    return new CallUnrelatedDpSpecificCommonParameters(
        serviceAddressInformation,
        callingPartyNumber,
        locationNumber,
        terminalType,
        extensions
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
    if (!_cached_encoder_for_CallUnrelatedDpSpecificCommonParameters) { _cached_encoder_for_CallUnrelatedDpSpecificCommonParameters = function (value: CallUnrelatedDpSpecificCommonParameters): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ServiceAddressInformation, $.BER)(value.serviceAddressInformation, $.BER),
            /* IF_ABSENT  */ ((value.callingPartyNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CallingPartyNumber, $.BER)(value.callingPartyNumber, $.BER)),
            /* IF_ABSENT  */ ((value.locationNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_LocationNumber, $.BER)(value.locationNumber, $.BER)),
            /* IF_DEFAULT */ (value.terminalType === undefined || $.deepEq(value.terminalType, CallUnrelatedDpSpecificCommonParameters._default_value_for_terminalType) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_TerminalType, $.BER)(value.terminalType, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallUnrelatedDpSpecificCommonParameters(value, elGetter);
}


/* eslint-enable */
