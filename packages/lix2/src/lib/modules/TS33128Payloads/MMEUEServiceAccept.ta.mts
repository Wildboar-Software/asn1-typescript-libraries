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
import { TMSI, _decode_TMSI, _encode_TMSI } from "../TS33128Payloads/TMSI.ta.mjs";
// export { TMSI, _decode_TMSI, _encode_TMSI } from "../TS33128Payloads/TMSI.ta.mjs";
import { MUSIMUERequestType, _decode_MUSIMUERequestType, _encode_MUSIMUERequestType } from "../TS33128Payloads/MUSIMUERequestType.ta.mjs";
// export { MUSIMUERequestType, _decode_MUSIMUERequestType, _encode_MUSIMUERequestType } from "../TS33128Payloads/MUSIMUERequestType.ta.mjs";
import { PagingRestrictionIndicator, _decode_PagingRestrictionIndicator, _encode_PagingRestrictionIndicator } from "../TS33128Payloads/PagingRestrictionIndicator.ta.mjs";
// export { PagingRestrictionIndicator, _decode_PagingRestrictionIndicator, _encode_PagingRestrictionIndicator } from "../TS33128Payloads/PagingRestrictionIndicator.ta.mjs";


/**
 * @summary MMEUEServiceAccept
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEUEServiceAccept ::= SEQUENCE
 * {
 *     userIdentifiers          [1] UserIdentifiers,
 *     serviceType              [2] OCTET STRING (SIZE(1)) OPTIONAL,
 *     mTMSI                    [3] TMSI OPTIONAL,
 *     cSFBResponse             [4] OCTET STRING (SIZE (1)) OPTIONAL,
 *     uEEPSBearerContextStatus [5] OCTET STRING (SIZE(2)) OPTIONAL,
 *     uERequestType            [6] MUSIMUERequestType OPTIONAL,
 *     pagingRestriction        [7] PagingRestrictionIndicator OPTIONAL,
 *     controlPlaneServiceType  [8] OCTET STRING (SIZE(1)) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MMEUEServiceAccept {
    constructor (
        /**
         * @summary `userIdentifiers`.
         * @public
         * @readonly
         */
        readonly userIdentifiers: UserIdentifiers,
        /**
         * @summary `serviceType`.
         * @public
         * @readonly
         */
        readonly serviceType: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `mTMSI`.
         * @public
         * @readonly
         */
        readonly mTMSI: OPTIONAL<TMSI>,
        /**
         * @summary `cSFBResponse`.
         * @public
         * @readonly
         */
        readonly cSFBResponse: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `uEEPSBearerContextStatus`.
         * @public
         * @readonly
         */
        readonly uEEPSBearerContextStatus: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `uERequestType`.
         * @public
         * @readonly
         */
        readonly uERequestType: OPTIONAL<MUSIMUERequestType>,
        /**
         * @summary `pagingRestriction`.
         * @public
         * @readonly
         */
        readonly pagingRestriction: OPTIONAL<PagingRestrictionIndicator>,
        /**
         * @summary `controlPlaneServiceType`.
         * @public
         * @readonly
         */
        readonly controlPlaneServiceType: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a MMEUEServiceAccept
     * @description
     * 
     * This takes an `object` and converts it to a `MMEUEServiceAccept`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMEUEServiceAccept`.
     * @returns {MMEUEServiceAccept}
     */
    public static _from_object (_o: { [_K in keyof (MMEUEServiceAccept)]: (MMEUEServiceAccept)[_K] }): MMEUEServiceAccept {
        return new MMEUEServiceAccept(_o.userIdentifiers, _o.serviceType, _o.mTMSI, _o.cSFBResponse, _o.uEEPSBearerContextStatus, _o.uERequestType, _o.pagingRestriction, _o.controlPlaneServiceType);
    }


}

/**
 * @summary The Leading Root Component Types of MMEUEServiceAccept
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMEUEServiceAccept: $.ComponentSpec[] = [
    new $.ComponentSpec("userIdentifiers", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serviceType", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mTMSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("cSFBResponse", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("uEEPSBearerContextStatus", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("uERequestType", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("pagingRestriction", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("controlPlaneServiceType", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of MMEUEServiceAccept
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMEUEServiceAccept: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMEUEServiceAccept
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMEUEServiceAccept: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMEUEServiceAccept: $.ASN1Decoder<MMEUEServiceAccept> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMEUEServiceAccept
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMEUEServiceAccept (el: _Element): MMEUEServiceAccept {
    if (!_cached_decoder_for_MMEUEServiceAccept) { _cached_decoder_for_MMEUEServiceAccept = function (el: _Element): MMEUEServiceAccept {
    let userIdentifiers!: UserIdentifiers;
    let serviceType: OPTIONAL<OCTET_STRING>;
    let mTMSI: OPTIONAL<TMSI>;
    let cSFBResponse: OPTIONAL<OCTET_STRING>;
    let uEEPSBearerContextStatus: OPTIONAL<OCTET_STRING>;
    let uERequestType: OPTIONAL<MUSIMUERequestType>;
    let pagingRestriction: OPTIONAL<PagingRestrictionIndicator>;
    let controlPlaneServiceType: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "userIdentifiers": (_el: _Element): void => { userIdentifiers = $._decode_implicit<UserIdentifiers>(() => _decode_UserIdentifiers)(_el); },
        "serviceType": (_el: _Element): void => { serviceType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mTMSI": (_el: _Element): void => { mTMSI = $._decode_implicit<TMSI>(() => _decode_TMSI)(_el); },
        "cSFBResponse": (_el: _Element): void => { cSFBResponse = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "uEEPSBearerContextStatus": (_el: _Element): void => { uEEPSBearerContextStatus = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "uERequestType": (_el: _Element): void => { uERequestType = $._decode_implicit<MUSIMUERequestType>(() => _decode_MUSIMUERequestType)(_el); },
        "pagingRestriction": (_el: _Element): void => { pagingRestriction = $._decode_implicit<PagingRestrictionIndicator>(() => _decode_PagingRestrictionIndicator)(_el); },
        "controlPlaneServiceType": (_el: _Element): void => { controlPlaneServiceType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMEUEServiceAccept,
        _extension_additions_list_spec_for_MMEUEServiceAccept,
        _root_component_type_list_2_spec_for_MMEUEServiceAccept,
        undefined,
    );
    return new MMEUEServiceAccept(
        userIdentifiers,
        serviceType,
        mTMSI,
        cSFBResponse,
        uEEPSBearerContextStatus,
        uERequestType,
        pagingRestriction,
        controlPlaneServiceType
    );
}; }
    return _cached_decoder_for_MMEUEServiceAccept(el);
}

let _cached_encoder_for_MMEUEServiceAccept: $.ASN1Encoder<MMEUEServiceAccept> | null = null;

/**
 * @summary Encodes a(n) MMEUEServiceAccept into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMEUEServiceAccept, encoded as an ASN.1 Element.
 */
export
function _encode_MMEUEServiceAccept (value: MMEUEServiceAccept, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMEUEServiceAccept) { _cached_encoder_for_MMEUEServiceAccept = function (value: MMEUEServiceAccept, elGetter: $.ASN1Encoder<MMEUEServiceAccept>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_UserIdentifiers, $.BER)(value.userIdentifiers, $.BER),
            /* IF_ABSENT  */ ((value.serviceType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.serviceType, $.BER)),
            /* IF_ABSENT  */ ((value.mTMSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_TMSI, $.BER)(value.mTMSI, $.BER)),
            /* IF_ABSENT  */ ((value.cSFBResponse === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.cSFBResponse, $.BER)),
            /* IF_ABSENT  */ ((value.uEEPSBearerContextStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.uEEPSBearerContextStatus, $.BER)),
            /* IF_ABSENT  */ ((value.uERequestType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_MUSIMUERequestType, $.BER)(value.uERequestType, $.BER)),
            /* IF_ABSENT  */ ((value.pagingRestriction === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_PagingRestrictionIndicator, $.BER)(value.pagingRestriction, $.BER)),
            /* IF_ABSENT  */ ((value.controlPlaneServiceType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.controlPlaneServiceType, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMEUEServiceAccept(value, elGetter);
}


/* eslint-enable */
