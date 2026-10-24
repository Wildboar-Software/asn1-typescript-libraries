/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AMFFailedProcedureType, _decode_AMFFailedProcedureType, _encode_AMFFailedProcedureType, _enum_for_AMFFailedProcedureType } from "../TS33128Payloads/AMFFailedProcedureType.ta.mjs";
// export { AMFFailedProcedureType, _enum_for_AMFFailedProcedureType, AMFFailedProcedureType_registration /* IMPORTED_LONG_ENUMERATION_ITEM */, registration /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMFFailedProcedureType_sMS /* IMPORTED_LONG_ENUMERATION_ITEM */, sMS /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMFFailedProcedureType_pDUSessionEstablishment /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionEstablishment /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AMFFailedProcedureType, _encode_AMFFailedProcedureType } from "../TS33128Payloads/AMFFailedProcedureType.ta.mjs";
import { type AMFFailureCause, _decode_AMFFailureCause, _encode_AMFFailureCause } from "../TS33128Payloads/AMFFailureCause.ta.mjs";
// export { AMFFailureCause, _decode_AMFFailureCause, _encode_AMFFailureCause } from "../TS33128Payloads/AMFFailureCause.ta.mjs";
import { type NSSAI, _decode_NSSAI, _encode_NSSAI } from "../TS33128Payloads/NSSAI.ta.mjs";
// export { NSSAI, _decode_NSSAI, _encode_NSSAI } from "../TS33128Payloads/NSSAI.ta.mjs";
import { type SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { SUCI, _decode_SUCI, _encode_SUCI } from "../TS33128Payloads/SUCI.ta.mjs";
// export { SUCI, _decode_SUCI, _encode_SUCI } from "../TS33128Payloads/SUCI.ta.mjs";
import { type PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
import { type GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { FiveGGUTI, _decode_FiveGGUTI, _encode_FiveGGUTI } from "../TS33128Payloads/FiveGGUTI.ta.mjs";
// export { FiveGGUTI, _decode_FiveGGUTI, _encode_FiveGGUTI } from "../TS33128Payloads/FiveGGUTI.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
// export { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
import { type AlternativeNSSAIList, _decode_AlternativeNSSAIList, _encode_AlternativeNSSAIList } from "../TS33128Payloads/AlternativeNSSAIList.ta.mjs";
// export { AlternativeNSSAIList, _decode_AlternativeNSSAIList, _encode_AlternativeNSSAIList } from "../TS33128Payloads/AlternativeNSSAIList.ta.mjs";


/**
 * @summary AMFUnsuccessfulProcedure
 * @description
 * 
 * The IRI-POI in the AMF shall generate an xIRI containing an
 * AMFUnsuccessfulProcedure record when the IRI-POI present in the AMF detects
 * an unsuccessful procedure for a UE matching one of the target identifiers
 * provided via LI_X1.
 *
 * Accordingly, the IRI-POI in the AMF generates the xIRI when any of the
 * following events is detected:
 *
 * - AMF sends a N1: REGISTRATION REJECT message to the target UE and the UE 5G
 *   Mobility Management (5GMM) state for the access type (3GPP NG-RAN or
 *   non-3GPP access) within the AMF is changed to 5GMM-DEREGISTERED.
 *
 * - AMF aborts a registration procedure before the UE 5G Mobility Management
 *   (5GMM) state for the access type (3GPP NG-RAN or non-3GPP access) within
 *   the AMF is changed to 5GMM-REGISTERED.
 *
 * - AMF sends a SERVICE REJECT message to the target UE including a PDU session
 *   establishment reject message type.
 *
 * - AMF aborts a UE-initiated NAS transport procedure with payload container
 *   type IE set to "SMS".
 *
 * Unsuccessful registration shall be reported only if the target UE has been
 * successfully authenticated.
 *
 * NOTE: At least one identity shall be provided, the others shall be provided
 * if available.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.6.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFUnsuccessfulProcedure ::= SEQUENCE
 * {
 *     failedProcedureType         [1] AMFFailedProcedureType,
 *     failureCause                [2] AMFFailureCause,
 *     requestedSlice              [3] NSSAI OPTIONAL,
 *     sUPI                        [4] SUPI OPTIONAL,
 *     sUCI                        [5] SUCI OPTIONAL,
 *     pEI                         [6] PEI OPTIONAL,
 *     gPSI                        [7] GPSI OPTIONAL,
 *     gUTI                        [8] FiveGGUTI OPTIONAL,
 *     location                    [9] Location OPTIONAL,
 *     additionalUserIdentifiers   [10] UserIdentifiers OPTIONAL,
 *     alternativeNSSAI            [11] AlternativeNSSAIList OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AMFUnsuccessfulProcedure {
    /**
     * @summary `failedProcedureType`.
     * @description
     *
     * Specifies the procedure which failed at the AMF.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.6.
     *
     * @public
     * @readonly
     */
    readonly failedProcedureType: AMFFailedProcedureType;
    /**
     * @summary `failureCause`.
     * @description
     *
     * Provides the value of the 5GSM or 5GMM cause, see TS 24.501 [13] clauses
     * 9.11.3.2 and 9.11.4.2. The integer value is mapped from the second octet
     * shown in TS 24.501 [13] clauses 9.11.3.2 and 9.11.4.2.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.6.
     *
     * @public
     * @readonly
     */
    readonly failureCause: AMFFailureCause;
    /**
     * @summary `requestedSlice`.
     * @description
     *
     * Slice requested for the procedure, if available, given as a NSSAI (a list
     * of S-NSSAI values as described in TS 24.501 [13] clause 9.11.3.37).
     *
     * 3GPP TS 33.128, clause 6.2.2.2.6.
     *
     * @public
     * @readonly
     */
    readonly requestedSlice: OPTIONAL<NSSAI>;
    /**
     * @summary `sUPI`.
     * @description
     *
     * SUPI associated with the procedure, if available (see NOTE). NOTE: At
     * least one identity shall be provided, the others shall be provided if
     * available.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.6.
     *
     * @public
     * @readonly
     */
    readonly sUPI: OPTIONAL<SUPI>;
    /**
     * @summary `sUCI`.
     * @description
     *
     * SUCI used in the procedure, if applicable and if available (see NOTE).
     * NOTE: At least one identity shall be provided, the others shall be
     * provided if available.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.6.
     *
     * @public
     * @readonly
     */
    readonly sUCI: OPTIONAL<SUCI>;
    /**
     * @summary `pEI`.
     * @description
     *
     * PEI used in the procedure, if available (see NOTE). NOTE: At least one
     * identity shall be provided, the others shall be provided if available.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.6.
     *
     * @public
     * @readonly
     */
    readonly pEI: OPTIONAL<PEI>;
    /**
     * @summary `gPSI`.
     * @description
     *
     * GPSI used in the procedure, if available (see NOTE). NOTE: At least one
     * identity shall be provided, the others shall be provided if available.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.6.
     *
     * @public
     * @readonly
     */
    readonly gPSI: OPTIONAL<GPSI>;
    /**
     * @summary `gUTI`.
     * @description
     *
     * 5G-GUTI used in the procedure, if available, see TS 24.501 [13] clause
     * 9.11.3.4 (see NOTE). NOTE: At least one identity shall be provided, the
     * others shall be provided if available.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.6.
     *
     * @public
     * @readonly
     */
    readonly gUTI: OPTIONAL<FiveGGUTI>;
    /**
     * @summary `location`.
     * @description
     *
     * Location information determined during the procedure, if available. Shall
     * be encoded using the Location.locationinfo.userlocation parameter. If
     * available, other parameters reportable via Location shall be included.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.6.
     *
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary `additionalUserIdentifiers`.
     * @description
     *
     * Provides additional user identifiers known at the AMF or stored in AMF
     * context, e.g. additional GPSI.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.6.
     *
     * @public
     * @readonly
     */
    readonly additionalUserIdentifiers: OPTIONAL<UserIdentifiers>;
    /**
     * @summary `alternativeNSSAI`.
     * @description
     *
     * Provides a list of mapping information between the S-NSSAI to be replaced
     * and the alternative S-NSSAI. Shall be included if available. See TS
     * 24.501 [13] clause 9.11.3.97.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.6.
     *
     * @public
     * @readonly
     */
    readonly alternativeNSSAI: OPTIONAL<AlternativeNSSAIList>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        failedProcedureType: AMFFailedProcedureType,
        failureCause: AMFFailureCause,
        requestedSlice?: OPTIONAL<NSSAI>,
        sUPI?: OPTIONAL<SUPI>,
        sUCI?: OPTIONAL<SUCI>,
        pEI?: OPTIONAL<PEI>,
        gPSI?: OPTIONAL<GPSI>,
        gUTI?: OPTIONAL<FiveGGUTI>,
        location?: OPTIONAL<Location>,
        additionalUserIdentifiers?: OPTIONAL<UserIdentifiers>,
        alternativeNSSAI?: OPTIONAL<AlternativeNSSAIList>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.failedProcedureType = failedProcedureType;
        this.failureCause = failureCause;
        this.requestedSlice = requestedSlice;
        this.sUPI = sUPI;
        this.sUCI = sUCI;
        this.pEI = pEI;
        this.gPSI = gPSI;
        this.gUTI = gUTI;
        this.location = location;
        this.additionalUserIdentifiers = additionalUserIdentifiers;
        this.alternativeNSSAI = alternativeNSSAI;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a AMFUnsuccessfulProcedure
     * @description
     * 
     * This takes an `object` and converts it to a `AMFUnsuccessfulProcedure`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AMFUnsuccessfulProcedure`.
     * @returns {AMFUnsuccessfulProcedure}
     */
    public static _from_object (_o: { [_K in keyof (AMFUnsuccessfulProcedure)]: (AMFUnsuccessfulProcedure)[_K] }): AMFUnsuccessfulProcedure {
        return new AMFUnsuccessfulProcedure(_o.failedProcedureType, _o.failureCause, _o.requestedSlice, _o.sUPI, _o.sUCI, _o.pEI, _o.gPSI, _o.gUTI, _o.location, _o.additionalUserIdentifiers, _o.alternativeNSSAI, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `failedProcedureType`
         * @public
         * @static
         */

    public static _enum_for_failedProcedureType = _enum_for_AMFFailedProcedureType;
}

/**
 * @summary The Leading Root Component Types of AMFUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AMFUnsuccessfulProcedure: $.ComponentSpec[] = [
    new $.ComponentSpec("failedProcedureType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("failureCause", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("requestedSlice", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sUPI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sUCI", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("gUTI", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("additionalUserIdentifiers", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("alternativeNSSAI", true, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of AMFUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AMFUnsuccessfulProcedure: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AMFUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AMFUnsuccessfulProcedure: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AMFUnsuccessfulProcedure: $.ASN1Decoder<AMFUnsuccessfulProcedure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFUnsuccessfulProcedure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFUnsuccessfulProcedure (el: _Element): AMFUnsuccessfulProcedure {
    if (!_cached_decoder_for_AMFUnsuccessfulProcedure) { _cached_decoder_for_AMFUnsuccessfulProcedure = function (el: _Element): AMFUnsuccessfulProcedure {
    let failedProcedureType!: AMFFailedProcedureType;
    let failureCause!: AMFFailureCause;
    let requestedSlice: OPTIONAL<NSSAI>;
    let sUPI: OPTIONAL<SUPI>;
    let sUCI: OPTIONAL<SUCI>;
    let pEI: OPTIONAL<PEI>;
    let gPSI: OPTIONAL<GPSI>;
    let gUTI: OPTIONAL<FiveGGUTI>;
    let location: OPTIONAL<Location>;
    let additionalUserIdentifiers: OPTIONAL<UserIdentifiers>;
    let alternativeNSSAI: OPTIONAL<AlternativeNSSAIList>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "failedProcedureType": (_el: _Element): void => { failedProcedureType = $._decode_implicit<AMFFailedProcedureType>(() => _decode_AMFFailedProcedureType)(_el); },
        "failureCause": (_el: _Element): void => { failureCause = $._decode_explicit<AMFFailureCause>(() => _decode_AMFFailureCause)(_el); },
        "requestedSlice": (_el: _Element): void => { requestedSlice = $._decode_implicit<NSSAI>(() => _decode_NSSAI)(_el); },
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "sUCI": (_el: _Element): void => { sUCI = $._decode_implicit<SUCI>(() => _decode_SUCI)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "gUTI": (_el: _Element): void => { gUTI = $._decode_implicit<FiveGGUTI>(() => _decode_FiveGGUTI)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "additionalUserIdentifiers": (_el: _Element): void => { additionalUserIdentifiers = $._decode_implicit<UserIdentifiers>(() => _decode_UserIdentifiers)(_el); },
        "alternativeNSSAI": (_el: _Element): void => { alternativeNSSAI = $._decode_implicit<AlternativeNSSAIList>(() => _decode_AlternativeNSSAIList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AMFUnsuccessfulProcedure,
        _extension_additions_list_spec_for_AMFUnsuccessfulProcedure,
        _root_component_type_list_2_spec_for_AMFUnsuccessfulProcedure,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AMFUnsuccessfulProcedure(
        failedProcedureType,
        failureCause,
        requestedSlice,
        sUPI,
        sUCI,
        pEI,
        gPSI,
        gUTI,
        location,
        additionalUserIdentifiers,
        alternativeNSSAI,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AMFUnsuccessfulProcedure(el);
}

let _cached_encoder_for_AMFUnsuccessfulProcedure: $.ASN1Encoder<AMFUnsuccessfulProcedure> | null = null;

/**
 * @summary Encodes a(n) AMFUnsuccessfulProcedure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFUnsuccessfulProcedure, encoded as an ASN.1 Element.
 */
export
function _encode_AMFUnsuccessfulProcedure (value: AMFUnsuccessfulProcedure, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFUnsuccessfulProcedure) { _cached_encoder_for_AMFUnsuccessfulProcedure = function (value: AMFUnsuccessfulProcedure, elGetter: $.ASN1Encoder<AMFUnsuccessfulProcedure>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(11 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AMFFailedProcedureType, $.BER)(value.failedProcedureType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_AMFFailureCause, $.BER)(value.failureCause, $.BER);
    if (value.requestedSlice !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_NSSAI, $.BER)(value.requestedSlice, $.BER);
    }
    if (value.sUPI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_SUPI, $.BER)(value.sUPI, $.BER);
    }
    if (value.sUCI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_SUCI, $.BER)(value.sUCI, $.BER);
    }
    if (value.pEI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 6, () => _encode_PEI, $.BER)(value.pEI, $.BER);
    }
    if (value.gPSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 7, () => _encode_GPSI, $.BER)(value.gPSI, $.BER);
    }
    if (value.gUTI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_FiveGGUTI, $.BER)(value.gUTI, $.BER);
    }
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    if (value.additionalUserIdentifiers !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_UserIdentifiers, $.BER)(value.additionalUserIdentifiers, $.BER);
    }
    if (value.alternativeNSSAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_AlternativeNSSAIList, $.BER)(value.alternativeNSSAI, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AMFUnsuccessfulProcedure(value, elGetter);
}


/* eslint-enable */
