/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
// export { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
import { ServiceMessageIdentity, _decode_ServiceMessageIdentity, _encode_ServiceMessageIdentity } from "../TS33128Payloads/ServiceMessageIdentity.ta.mjs";
// export { ServiceMessageIdentity, _decode_ServiceMessageIdentity, _encode_ServiceMessageIdentity } from "../TS33128Payloads/ServiceMessageIdentity.ta.mjs";
import { FiveGTMSI, _decode_FiveGTMSI, _encode_FiveGTMSI } from "../TS33128Payloads/FiveGTMSI.ta.mjs";
// export { FiveGTMSI, _decode_FiveGTMSI, _encode_FiveGTMSI } from "../TS33128Payloads/FiveGTMSI.ta.mjs";
import { FiveGSMRequestType, _decode_FiveGSMRequestType, _encode_FiveGSMRequestType, _enum_for_FiveGSMRequestType } from "../TS33128Payloads/FiveGSMRequestType.ta.mjs";
// export { FiveGSMRequestType, _enum_for_FiveGSMRequestType, FiveGSMRequestType_initialRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_existingPDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, existingPDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_initialEmergencyRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialEmergencyRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_existingEmergencyPDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, existingEmergencyPDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_modificationRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, modificationRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_mAPDURequest /* IMPORTED_LONG_ENUMERATION_ITEM */, mAPDURequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FiveGSMRequestType, _encode_FiveGSMRequestType } from "../TS33128Payloads/FiveGSMRequestType.ta.mjs";
import { PagingRestrictionIndicator, _decode_PagingRestrictionIndicator, _encode_PagingRestrictionIndicator } from "../TS33128Payloads/PagingRestrictionIndicator.ta.mjs";
// export { PagingRestrictionIndicator, _decode_PagingRestrictionIndicator, _encode_PagingRestrictionIndicator } from "../TS33128Payloads/PagingRestrictionIndicator.ta.mjs";
import { TAIList, _decode_TAIList, _encode_TAIList } from "../TS33128Payloads/TAIList.ta.mjs";
// export { TAIList, _decode_TAIList, _encode_TAIList } from "../TS33128Payloads/TAIList.ta.mjs";
import { MUSIMUERequestType, _decode_MUSIMUERequestType, _encode_MUSIMUERequestType } from "../TS33128Payloads/MUSIMUERequestType.ta.mjs";
// export { MUSIMUERequestType, _decode_MUSIMUERequestType, _encode_MUSIMUERequestType } from "../TS33128Payloads/MUSIMUERequestType.ta.mjs";


/**
 * @summary AMFUEServiceAccept
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFUEServiceAccept ::= SEQUENCE
 * {
 *     userIdentifiers                [1] UserIdentifiers,
 *     serviceMessageIdentity         [2] ServiceMessageIdentity,
 *     serviceType                    [3] OCTET STRING (SIZE(1)) OPTIONAL,
 *     fiveGTMSI                      [4] FiveGTMSI OPTIONAL,
 *     uplinkDataStatus               [5] OCTET STRING (SIZE(2..32)) OPTIONAL,
 *     pDUSessionStatus               [6] OCTET STRING (SIZE(2..32)) OPTIONAL,
 *     -- deprecatedUERequestType was deprecated in r18(18) version6(6) and shall not be reused.
 *     deprecatedUERequestType        [7] FiveGSMRequestType OPTIONAL,
 *     pagingRestriction              [8] PagingRestrictionIndicator OPTIONAL,
 *     forbiddenTAIList               [9] TAIList OPTIONAL,
 *     uERequestType                  [10] MUSIMUERequestType OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AMFUEServiceAccept {
    constructor (
        /**
         * @summary `userIdentifiers`.
         * @public
         * @readonly
         */
        readonly userIdentifiers: UserIdentifiers,
        /**
         * @summary `serviceMessageIdentity`.
         * @public
         * @readonly
         */
        readonly serviceMessageIdentity: ServiceMessageIdentity,
        /**
         * @summary `serviceType`.
         * @public
         * @readonly
         */
        readonly serviceType: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `fiveGTMSI`.
         * @public
         * @readonly
         */
        readonly fiveGTMSI: OPTIONAL<FiveGTMSI>,
        /**
         * @summary `uplinkDataStatus`.
         * @public
         * @readonly
         */
        readonly uplinkDataStatus: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `pDUSessionStatus`.
         * @public
         * @readonly
         */
        readonly pDUSessionStatus: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `deprecatedUERequestType`.
         * @public
         * @readonly
         */
        readonly deprecatedUERequestType: OPTIONAL<FiveGSMRequestType>,
        /**
         * @summary `pagingRestriction`.
         * @public
         * @readonly
         */
        readonly pagingRestriction: OPTIONAL<PagingRestrictionIndicator>,
        /**
         * @summary `forbiddenTAIList`.
         * @public
         * @readonly
         */
        readonly forbiddenTAIList: OPTIONAL<TAIList>,
        /**
         * @summary `uERequestType`.
         * @public
         * @readonly
         */
        readonly uERequestType: OPTIONAL<MUSIMUERequestType>
    ) {}

    /**
     * @summary Restructures an object into a AMFUEServiceAccept
     * @description
     * 
     * This takes an `object` and converts it to a `AMFUEServiceAccept`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AMFUEServiceAccept`.
     * @returns {AMFUEServiceAccept}
     */
    public static _from_object (_o: { [_K in keyof (AMFUEServiceAccept)]: (AMFUEServiceAccept)[_K] }): AMFUEServiceAccept {
        return new AMFUEServiceAccept(_o.userIdentifiers, _o.serviceMessageIdentity, _o.serviceType, _o.fiveGTMSI, _o.uplinkDataStatus, _o.pDUSessionStatus, _o.deprecatedUERequestType, _o.pagingRestriction, _o.forbiddenTAIList, _o.uERequestType);
    }

        /**
         * @summary The enum used as the type of the component `deprecatedUERequestType`
         * @public
         * @static
         */

    public static _enum_for_deprecatedUERequestType = _enum_for_FiveGSMRequestType;
}

/**
 * @summary The Leading Root Component Types of AMFUEServiceAccept
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AMFUEServiceAccept: $.ComponentSpec[] = [
    new $.ComponentSpec("userIdentifiers", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serviceMessageIdentity", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("serviceType", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("fiveGTMSI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("uplinkDataStatus", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("pDUSessionStatus", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("deprecatedUERequestType", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("pagingRestriction", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("forbiddenTAIList", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("uERequestType", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of AMFUEServiceAccept
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AMFUEServiceAccept: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AMFUEServiceAccept
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AMFUEServiceAccept: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AMFUEServiceAccept: $.ASN1Decoder<AMFUEServiceAccept> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFUEServiceAccept
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFUEServiceAccept (el: _Element): AMFUEServiceAccept {
    if (!_cached_decoder_for_AMFUEServiceAccept) { _cached_decoder_for_AMFUEServiceAccept = function (el: _Element): AMFUEServiceAccept {
    let userIdentifiers!: UserIdentifiers;
    let serviceMessageIdentity!: ServiceMessageIdentity;
    let serviceType: OPTIONAL<OCTET_STRING>;
    let fiveGTMSI: OPTIONAL<FiveGTMSI>;
    let uplinkDataStatus: OPTIONAL<OCTET_STRING>;
    let pDUSessionStatus: OPTIONAL<OCTET_STRING>;
    let deprecatedUERequestType: OPTIONAL<FiveGSMRequestType>;
    let pagingRestriction: OPTIONAL<PagingRestrictionIndicator>;
    let forbiddenTAIList: OPTIONAL<TAIList>;
    let uERequestType: OPTIONAL<MUSIMUERequestType>;
    const callbacks: $.DecodingMap = {
        "userIdentifiers": (_el: _Element): void => { userIdentifiers = $._decode_implicit<UserIdentifiers>(() => _decode_UserIdentifiers)(_el); },
        "serviceMessageIdentity": (_el: _Element): void => { serviceMessageIdentity = $._decode_explicit<ServiceMessageIdentity>(() => _decode_ServiceMessageIdentity)(_el); },
        "serviceType": (_el: _Element): void => { serviceType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "fiveGTMSI": (_el: _Element): void => { fiveGTMSI = $._decode_implicit<FiveGTMSI>(() => _decode_FiveGTMSI)(_el); },
        "uplinkDataStatus": (_el: _Element): void => { uplinkDataStatus = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "pDUSessionStatus": (_el: _Element): void => { pDUSessionStatus = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "deprecatedUERequestType": (_el: _Element): void => { deprecatedUERequestType = $._decode_implicit<FiveGSMRequestType>(() => _decode_FiveGSMRequestType)(_el); },
        "pagingRestriction": (_el: _Element): void => { pagingRestriction = $._decode_implicit<PagingRestrictionIndicator>(() => _decode_PagingRestrictionIndicator)(_el); },
        "forbiddenTAIList": (_el: _Element): void => { forbiddenTAIList = $._decode_implicit<TAIList>(() => _decode_TAIList)(_el); },
        "uERequestType": (_el: _Element): void => { uERequestType = $._decode_implicit<MUSIMUERequestType>(() => _decode_MUSIMUERequestType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AMFUEServiceAccept,
        _extension_additions_list_spec_for_AMFUEServiceAccept,
        _root_component_type_list_2_spec_for_AMFUEServiceAccept,
        undefined,
    );
    return new AMFUEServiceAccept(
        userIdentifiers,
        serviceMessageIdentity,
        serviceType,
        fiveGTMSI,
        uplinkDataStatus,
        pDUSessionStatus,
        deprecatedUERequestType,
        pagingRestriction,
        forbiddenTAIList,
        uERequestType
    );
}; }
    return _cached_decoder_for_AMFUEServiceAccept(el);
}

let _cached_encoder_for_AMFUEServiceAccept: $.ASN1Encoder<AMFUEServiceAccept> | null = null;

/**
 * @summary Encodes a(n) AMFUEServiceAccept into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFUEServiceAccept, encoded as an ASN.1 Element.
 */
export
function _encode_AMFUEServiceAccept (value: AMFUEServiceAccept, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFUEServiceAccept) { _cached_encoder_for_AMFUEServiceAccept = function (value: AMFUEServiceAccept, elGetter: $.ASN1Encoder<AMFUEServiceAccept>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_UserIdentifiers, $.BER)(value.userIdentifiers, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_ServiceMessageIdentity, $.BER)(value.serviceMessageIdentity, $.BER),
            /* IF_ABSENT  */ ((value.serviceType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.serviceType, $.BER)),
            /* IF_ABSENT  */ ((value.fiveGTMSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_FiveGTMSI, $.BER)(value.fiveGTMSI, $.BER)),
            /* IF_ABSENT  */ ((value.uplinkDataStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.uplinkDataStatus, $.BER)),
            /* IF_ABSENT  */ ((value.pDUSessionStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.pDUSessionStatus, $.BER)),
            /* IF_ABSENT  */ ((value.deprecatedUERequestType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_FiveGSMRequestType, $.BER)(value.deprecatedUERequestType, $.BER)),
            /* IF_ABSENT  */ ((value.pagingRestriction === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_PagingRestrictionIndicator, $.BER)(value.pagingRestriction, $.BER)),
            /* IF_ABSENT  */ ((value.forbiddenTAIList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_TAIList, $.BER)(value.forbiddenTAIList, $.BER)),
            /* IF_ABSENT  */ ((value.uERequestType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_MUSIMUERequestType, $.BER)(value.uERequestType, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AMFUEServiceAccept(value, elGetter);
}


/* eslint-enable */
