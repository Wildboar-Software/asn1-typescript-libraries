/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
// export { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
import { GUTI, _decode_GUTI, _encode_GUTI } from "../TS33128Payloads/GUTI.ta.mjs";
// export { GUTI, _decode_GUTI, _encode_GUTI } from "../TS33128Payloads/GUTI.ta.mjs";
import { type EPS5GGUTI, _decode_EPS5GGUTI, _encode_EPS5GGUTI } from "../TS33128Payloads/EPS5GGUTI.ta.mjs";
// export { EPS5GGUTI, _decode_EPS5GGUTI, _encode_EPS5GGUTI } from "../TS33128Payloads/EPS5GGUTI.ta.mjs";
import { type TAIList, _decode_TAIList, _encode_TAIList } from "../TS33128Payloads/TAIList.ta.mjs";
// export { TAIList, _decode_TAIList, _encode_TAIList } from "../TS33128Payloads/TAIList.ta.mjs";
import { Slice, _decode_Slice, _encode_Slice } from "../TS33128Payloads/Slice.ta.mjs";
// export { Slice, _decode_Slice, _encode_Slice } from "../TS33128Payloads/Slice.ta.mjs";
import { type ServiceAreaList, _decode_ServiceAreaList, _encode_ServiceAreaList } from "../TS33128Payloads/ServiceAreaList.ta.mjs";
// export { ServiceAreaList, _decode_ServiceAreaList, _encode_ServiceAreaList } from "../TS33128Payloads/ServiceAreaList.ta.mjs";
import { AMFRegistrationResult, _decode_AMFRegistrationResult, _encode_AMFRegistrationResult, _enum_for_AMFRegistrationResult } from "../TS33128Payloads/AMFRegistrationResult.ta.mjs";
// export { AMFRegistrationResult, _enum_for_AMFRegistrationResult, AMFRegistrationResult_threeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMFRegistrationResult_nonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, nonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMFRegistrationResult_threeGPPAndNonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAndNonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AMFRegistrationResult, _encode_AMFRegistrationResult } from "../TS33128Payloads/AMFRegistrationResult.ta.mjs";
import { SMSOverNASIndicator, _decode_SMSOverNASIndicator, _encode_SMSOverNASIndicator, _enum_for_SMSOverNASIndicator } from "../TS33128Payloads/SMSOverNASIndicator.ta.mjs";
// export { SMSOverNASIndicator, _enum_for_SMSOverNASIndicator, SMSOverNASIndicator_sMSOverNASNotAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, sMSOverNASNotAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSOverNASIndicator_sMSOverNASAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, sMSOverNASAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMSOverNASIndicator, _encode_SMSOverNASIndicator } from "../TS33128Payloads/SMSOverNASIndicator.ta.mjs";
import { type AlternativeNSSAIList, _decode_AlternativeNSSAIList, _encode_AlternativeNSSAIList } from "../TS33128Payloads/AlternativeNSSAIList.ta.mjs";
// export { AlternativeNSSAIList, _decode_AlternativeNSSAIList, _encode_AlternativeNSSAIList } from "../TS33128Payloads/AlternativeNSSAIList.ta.mjs";


/**
 * @summary AMFUEConfigurationUpdate
 * @description
 * 
 * The IRI-POI in the AMF shall generate an xIRI containing a
 * AMFUEConfigurationUpdate record when the IRI-POI present in the AMF detects
 * that a UE matching one of the target identifiers provided via LI_X1 has been
 * commanded to update its configuration. Accordingly, the IRI-POI in the AMF
 * generates the xIRI when the following event is detected:
 *
 * - AMF sends a CONFIGURATION UPDATE COMMAND message to the target UE.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.10.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFUEConfigurationUpdate ::= SEQUENCE
 * {
 *     userIdentifiers     [1] UserIdentifiers,
 *     gUTI                [2] GUTI,
 *     oldGUTI             [3] EPS5GGUTI OPTIONAL,
 *     fiveGSTAIList       [4] TAIList OPTIONAL,
 *     slice               [5] Slice OPTIONAL,
 *     serviceAreaList     [6] ServiceAreaList OPTIONAL,
 *     registrationResult  [7] AMFRegistrationResult OPTIONAL,
 *     sMSOverNASIndicator [8] SMSOverNASIndicator OPTIONAL,
 *     alternativeNSSAI    [9] AlternativeNSSAIList OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AMFUEConfigurationUpdate {
    /**
     * @summary `userIdentifiers`.
     * @description
     *
     * List of identifiers, including the target identifier, associated with the
     * target UE registration stored in the AMF context. See TS 29.518 [22]
     * clause 6.1.6.2.25.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.10.
     *
     * @public
     * @readonly
     */
    readonly userIdentifiers: UserIdentifiers;
    /**
     * @summary `gUTI`.
     * @description
     *
     * Current 5G-GUTI associated with the UE context. If the AMF includes a new
     * 5G-GUTI as a part of the configuration update, this parameter shall be
     * set to the new GUTI and the oldGUTI parameter shall be populated, see TS
     * 24.501 [13] clause 8.2.19.3.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.10.
     *
     * @public
     * @readonly
     */
    readonly gUTI: GUTI;
    /**
     * @summary `oldGUTI`.
     * @description
     *
     * Old 5G-GUTI associated with the UE context. If the AMF includes a new
     * 5G-GUTI as a part of the configuration update, this parameter shall be
     * set to the old GUTI.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.10.
     *
     * @public
     * @readonly
     */
    readonly oldGUTI: OPTIONAL<EPS5GGUTI>;
    /**
     * @summary `fiveGSTAIList`.
     * @description
     *
     * List of tracking areas associated with the registration area within which
     * the UE is current registered, see TS 24.501 [13] clause 9.11.3.9. Shall
     * be included each time there is a change to the registration area and
     * omitted if the registration area does not change.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.10.
     *
     * @public
     * @readonly
     */
    readonly fiveGSTAIList: OPTIONAL<TAIList>;
    /**
     * @summary `slice`.
     * @description
     *
     * Provide, if available, one or more of the following:
     *
     * - allowed NSSAI (see TS 24.501 [13] clause 9.11.3.37).
     *
     * - configured NSSAI (see TS 24.501 [13] clause 9.11.3.37).
     *
     * - rejected NSSAI (see TS 24.501 [13] clause 9.11.3.46). This is derived
     *   from the information sent to the UE in the CONFIGURATION UPDATE COMMAND
     *   message.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.10.
     *
     * @public
     * @readonly
     */
    readonly slice: OPTIONAL<Slice>;
    /**
     * @summary `serviceAreaList`.
     * @description
     *
     * Includes a list of allowed service areas or non-allowed service areas,
     * encoded per TS 24.501 [13] clause 9.11.3.49, omitting the first two
     * octets. Shall be included if present in the CONFIGURATION UPDATE COMMAND
     * message, see TS 24.501 [13] clause 8.2.19.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.10.
     *
     * @public
     * @readonly
     */
    readonly serviceAreaList: OPTIONAL<ServiceAreaList>;
    /**
     * @summary `registrationResult`.
     * @description
     *
     * Specifies the result of registration, see TS 24.501 [13] clause 9.11.3.6.
     * Shall be included if present in the CONFIGURATION UPDATE COMMAND message,
     * see TS 24.501 [13] clause 8.2.19.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.10.
     *
     * @public
     * @readonly
     */
    readonly registrationResult: OPTIONAL<AMFRegistrationResult>;
    /**
     * @summary `sMSOverNASIndicator`.
     * @description
     *
     * Indicates whether SMS over NAS is supported. Shall be present if the SMS
     * indication is present in the CONFIGURATION UPDATE COMMAND message, see TS
     * 24.501 [13] clause 8.2.19.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.10.
     *
     * @public
     * @readonly
     */
    readonly sMSOverNASIndicator: OPTIONAL<SMSOverNASIndicator>;
    /**
     * @summary `alternativeNSSAI`.
     * @description
     *
     * Provides a list of mapping information between the S-NSSAI to be replaced
     * and the alternative S-NSSAI. Shall be included if present in the
     * CONFIGURATION UPDATE COMMAND message. See TS 24.501 [13] clause
     * 9.11.3.97.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.10.
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
        userIdentifiers: UserIdentifiers,
        gUTI: GUTI,
        oldGUTI?: OPTIONAL<EPS5GGUTI>,
        fiveGSTAIList?: OPTIONAL<TAIList>,
        slice?: OPTIONAL<Slice>,
        serviceAreaList?: OPTIONAL<ServiceAreaList>,
        registrationResult?: OPTIONAL<AMFRegistrationResult>,
        sMSOverNASIndicator?: OPTIONAL<SMSOverNASIndicator>,
        alternativeNSSAI?: OPTIONAL<AlternativeNSSAIList>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.userIdentifiers = userIdentifiers;
        this.gUTI = gUTI;
        this.oldGUTI = oldGUTI;
        this.fiveGSTAIList = fiveGSTAIList;
        this.slice = slice;
        this.serviceAreaList = serviceAreaList;
        this.registrationResult = registrationResult;
        this.sMSOverNASIndicator = sMSOverNASIndicator;
        this.alternativeNSSAI = alternativeNSSAI;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a AMFUEConfigurationUpdate
     * @description
     * 
     * This takes an `object` and converts it to a `AMFUEConfigurationUpdate`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AMFUEConfigurationUpdate`.
     * @returns {AMFUEConfigurationUpdate}
     */
    public static _from_object (_o: { [_K in keyof (AMFUEConfigurationUpdate)]: (AMFUEConfigurationUpdate)[_K] }): AMFUEConfigurationUpdate {
        return new AMFUEConfigurationUpdate(_o.userIdentifiers, _o.gUTI, _o.oldGUTI, _o.fiveGSTAIList, _o.slice, _o.serviceAreaList, _o.registrationResult, _o.sMSOverNASIndicator, _o.alternativeNSSAI, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `registrationResult`
         * @public
         * @static
         */

    public static _enum_for_registrationResult = _enum_for_AMFRegistrationResult;        /**
         * @summary The enum used as the type of the component `sMSOverNASIndicator`
         * @public
         * @static
         */

    public static _enum_for_sMSOverNASIndicator = _enum_for_SMSOverNASIndicator;
}

/**
 * @summary The Leading Root Component Types of AMFUEConfigurationUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AMFUEConfigurationUpdate: $.ComponentSpec[] = [
    new $.ComponentSpec("userIdentifiers", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gUTI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("oldGUTI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("fiveGSTAIList", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("slice", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("serviceAreaList", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("registrationResult", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("sMSOverNASIndicator", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("alternativeNSSAI", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of AMFUEConfigurationUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AMFUEConfigurationUpdate: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AMFUEConfigurationUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AMFUEConfigurationUpdate: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AMFUEConfigurationUpdate: $.ASN1Decoder<AMFUEConfigurationUpdate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFUEConfigurationUpdate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFUEConfigurationUpdate (el: _Element): AMFUEConfigurationUpdate {
    if (!_cached_decoder_for_AMFUEConfigurationUpdate) { _cached_decoder_for_AMFUEConfigurationUpdate = function (el: _Element): AMFUEConfigurationUpdate {
    let userIdentifiers!: UserIdentifiers;
    let gUTI!: GUTI;
    let oldGUTI: OPTIONAL<EPS5GGUTI>;
    let fiveGSTAIList: OPTIONAL<TAIList>;
    let slice: OPTIONAL<Slice>;
    let serviceAreaList: OPTIONAL<ServiceAreaList>;
    let registrationResult: OPTIONAL<AMFRegistrationResult>;
    let sMSOverNASIndicator: OPTIONAL<SMSOverNASIndicator>;
    let alternativeNSSAI: OPTIONAL<AlternativeNSSAIList>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "userIdentifiers": (_el: _Element): void => { userIdentifiers = $._decode_implicit<UserIdentifiers>(() => _decode_UserIdentifiers)(_el); },
        "gUTI": (_el: _Element): void => { gUTI = $._decode_implicit<GUTI>(() => _decode_GUTI)(_el); },
        "oldGUTI": (_el: _Element): void => { oldGUTI = $._decode_explicit<EPS5GGUTI>(() => _decode_EPS5GGUTI)(_el); },
        "fiveGSTAIList": (_el: _Element): void => { fiveGSTAIList = $._decode_implicit<TAIList>(() => _decode_TAIList)(_el); },
        "slice": (_el: _Element): void => { slice = $._decode_implicit<Slice>(() => _decode_Slice)(_el); },
        "serviceAreaList": (_el: _Element): void => { serviceAreaList = $._decode_implicit<ServiceAreaList>(() => _decode_ServiceAreaList)(_el); },
        "registrationResult": (_el: _Element): void => { registrationResult = $._decode_implicit<AMFRegistrationResult>(() => _decode_AMFRegistrationResult)(_el); },
        "sMSOverNASIndicator": (_el: _Element): void => { sMSOverNASIndicator = $._decode_implicit<SMSOverNASIndicator>(() => _decode_SMSOverNASIndicator)(_el); },
        "alternativeNSSAI": (_el: _Element): void => { alternativeNSSAI = $._decode_implicit<AlternativeNSSAIList>(() => _decode_AlternativeNSSAIList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AMFUEConfigurationUpdate,
        _extension_additions_list_spec_for_AMFUEConfigurationUpdate,
        _root_component_type_list_2_spec_for_AMFUEConfigurationUpdate,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AMFUEConfigurationUpdate(
        userIdentifiers,
        gUTI,
        oldGUTI,
        fiveGSTAIList,
        slice,
        serviceAreaList,
        registrationResult,
        sMSOverNASIndicator,
        alternativeNSSAI,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AMFUEConfigurationUpdate(el);
}

let _cached_encoder_for_AMFUEConfigurationUpdate: $.ASN1Encoder<AMFUEConfigurationUpdate> | null = null;

/**
 * @summary Encodes a(n) AMFUEConfigurationUpdate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFUEConfigurationUpdate, encoded as an ASN.1 Element.
 */
export
function _encode_AMFUEConfigurationUpdate (value: AMFUEConfigurationUpdate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFUEConfigurationUpdate) { _cached_encoder_for_AMFUEConfigurationUpdate = function (value: AMFUEConfigurationUpdate, elGetter: $.ASN1Encoder<AMFUEConfigurationUpdate>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(9 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_UserIdentifiers, $.BER)(value.userIdentifiers, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_GUTI, $.BER)(value.gUTI, $.BER);
    if (value.oldGUTI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_EPS5GGUTI, $.BER)(value.oldGUTI, $.BER);
    }
    if (value.fiveGSTAIList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_TAIList, $.BER)(value.fiveGSTAIList, $.BER);
    }
    if (value.slice !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_Slice, $.BER)(value.slice, $.BER);
    }
    if (value.serviceAreaList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_ServiceAreaList, $.BER)(value.serviceAreaList, $.BER);
    }
    if (value.registrationResult !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_AMFRegistrationResult, $.BER)(value.registrationResult, $.BER);
    }
    if (value.sMSOverNASIndicator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_SMSOverNASIndicator, $.BER)(value.sMSOverNASIndicator, $.BER);
    }
    if (value.alternativeNSSAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_AlternativeNSSAIList, $.BER)(value.alternativeNSSAI, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AMFUEConfigurationUpdate(value, elGetter);
}


/* eslint-enable */
