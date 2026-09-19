/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
// export { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
import { GUTI, _decode_GUTI, _encode_GUTI } from "../TS33128Payloads/GUTI.ta.mjs";
// export { GUTI, _decode_GUTI, _encode_GUTI } from "../TS33128Payloads/GUTI.ta.mjs";
import { EPS5GGUTI, _decode_EPS5GGUTI, _encode_EPS5GGUTI } from "../TS33128Payloads/EPS5GGUTI.ta.mjs";
// export { EPS5GGUTI, _decode_EPS5GGUTI, _encode_EPS5GGUTI } from "../TS33128Payloads/EPS5GGUTI.ta.mjs";
import { TAIList, _decode_TAIList, _encode_TAIList } from "../TS33128Payloads/TAIList.ta.mjs";
// export { TAIList, _decode_TAIList, _encode_TAIList } from "../TS33128Payloads/TAIList.ta.mjs";
import { Slice, _decode_Slice, _encode_Slice } from "../TS33128Payloads/Slice.ta.mjs";
// export { Slice, _decode_Slice, _encode_Slice } from "../TS33128Payloads/Slice.ta.mjs";
import { ServiceAreaList, _decode_ServiceAreaList, _encode_ServiceAreaList } from "../TS33128Payloads/ServiceAreaList.ta.mjs";
// export { ServiceAreaList, _decode_ServiceAreaList, _encode_ServiceAreaList } from "../TS33128Payloads/ServiceAreaList.ta.mjs";
import { AMFRegistrationResult, _decode_AMFRegistrationResult, _encode_AMFRegistrationResult, _enum_for_AMFRegistrationResult } from "../TS33128Payloads/AMFRegistrationResult.ta.mjs";
// export { AMFRegistrationResult, _enum_for_AMFRegistrationResult, AMFRegistrationResult_threeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMFRegistrationResult_nonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, nonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMFRegistrationResult_threeGPPAndNonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAndNonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AMFRegistrationResult, _encode_AMFRegistrationResult } from "../TS33128Payloads/AMFRegistrationResult.ta.mjs";
import { SMSOverNASIndicator, _decode_SMSOverNASIndicator, _encode_SMSOverNASIndicator, _enum_for_SMSOverNASIndicator } from "../TS33128Payloads/SMSOverNASIndicator.ta.mjs";
// export { SMSOverNASIndicator, _enum_for_SMSOverNASIndicator, SMSOverNASIndicator_sMSOverNASNotAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, sMSOverNASNotAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSOverNASIndicator_sMSOverNASAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, sMSOverNASAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMSOverNASIndicator, _encode_SMSOverNASIndicator } from "../TS33128Payloads/SMSOverNASIndicator.ta.mjs";


/**
 * @summary AMFUEConfigurationUpdate
 * @description
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
 *     sMSOverNASIndicator [8] SMSOverNASIndicator OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AMFUEConfigurationUpdate {
    constructor (
        /**
         * @summary `userIdentifiers`.
         * @public
         * @readonly
         */
        readonly userIdentifiers: UserIdentifiers,
        /**
         * @summary `gUTI`.
         * @public
         * @readonly
         */
        readonly gUTI: GUTI,
        /**
         * @summary `oldGUTI`.
         * @public
         * @readonly
         */
        readonly oldGUTI: OPTIONAL<EPS5GGUTI>,
        /**
         * @summary `fiveGSTAIList`.
         * @public
         * @readonly
         */
        readonly fiveGSTAIList: OPTIONAL<TAIList>,
        /**
         * @summary `slice`.
         * @public
         * @readonly
         */
        readonly slice: OPTIONAL<Slice>,
        /**
         * @summary `serviceAreaList`.
         * @public
         * @readonly
         */
        readonly serviceAreaList: OPTIONAL<ServiceAreaList>,
        /**
         * @summary `registrationResult`.
         * @public
         * @readonly
         */
        readonly registrationResult: OPTIONAL<AMFRegistrationResult>,
        /**
         * @summary `sMSOverNASIndicator`.
         * @public
         * @readonly
         */
        readonly sMSOverNASIndicator: OPTIONAL<SMSOverNASIndicator>
    ) {}

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
        return new AMFUEConfigurationUpdate(_o.userIdentifiers, _o.gUTI, _o.oldGUTI, _o.fiveGSTAIList, _o.slice, _o.serviceAreaList, _o.registrationResult, _o.sMSOverNASIndicator);
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
    new $.ComponentSpec("sMSOverNASIndicator", true, $.hasTag(_TagClass.context, 8))
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
    const callbacks: $.DecodingMap = {
        "userIdentifiers": (_el: _Element): void => { userIdentifiers = $._decode_implicit<UserIdentifiers>(() => _decode_UserIdentifiers)(_el); },
        "gUTI": (_el: _Element): void => { gUTI = $._decode_implicit<GUTI>(() => _decode_GUTI)(_el); },
        "oldGUTI": (_el: _Element): void => { oldGUTI = $._decode_explicit<EPS5GGUTI>(() => _decode_EPS5GGUTI)(_el); },
        "fiveGSTAIList": (_el: _Element): void => { fiveGSTAIList = $._decode_implicit<TAIList>(() => _decode_TAIList)(_el); },
        "slice": (_el: _Element): void => { slice = $._decode_implicit<Slice>(() => _decode_Slice)(_el); },
        "serviceAreaList": (_el: _Element): void => { serviceAreaList = $._decode_implicit<ServiceAreaList>(() => _decode_ServiceAreaList)(_el); },
        "registrationResult": (_el: _Element): void => { registrationResult = $._decode_implicit<AMFRegistrationResult>(() => _decode_AMFRegistrationResult)(_el); },
        "sMSOverNASIndicator": (_el: _Element): void => { sMSOverNASIndicator = $._decode_implicit<SMSOverNASIndicator>(() => _decode_SMSOverNASIndicator)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AMFUEConfigurationUpdate,
        _extension_additions_list_spec_for_AMFUEConfigurationUpdate,
        _root_component_type_list_2_spec_for_AMFUEConfigurationUpdate,
        undefined,
    );
    return new AMFUEConfigurationUpdate(
        userIdentifiers,
        gUTI,
        oldGUTI,
        fiveGSTAIList,
        slice,
        serviceAreaList,
        registrationResult,
        sMSOverNASIndicator
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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_UserIdentifiers, $.BER)(value.userIdentifiers, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_GUTI, $.BER)(value.gUTI, $.BER),
            /* IF_ABSENT  */ ((value.oldGUTI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_EPS5GGUTI, $.BER)(value.oldGUTI, $.BER)),
            /* IF_ABSENT  */ ((value.fiveGSTAIList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_TAIList, $.BER)(value.fiveGSTAIList, $.BER)),
            /* IF_ABSENT  */ ((value.slice === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_Slice, $.BER)(value.slice, $.BER)),
            /* IF_ABSENT  */ ((value.serviceAreaList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ServiceAreaList, $.BER)(value.serviceAreaList, $.BER)),
            /* IF_ABSENT  */ ((value.registrationResult === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_AMFRegistrationResult, $.BER)(value.registrationResult, $.BER)),
            /* IF_ABSENT  */ ((value.sMSOverNASIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_SMSOverNASIndicator, $.BER)(value.sMSOverNASIndicator, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AMFUEConfigurationUpdate(value, elGetter);
}


/* eslint-enable */
