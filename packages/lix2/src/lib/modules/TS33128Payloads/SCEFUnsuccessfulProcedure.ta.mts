/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SCEFFailureCause, _decode_SCEFFailureCause, _encode_SCEFFailureCause, _enum_for_SCEFFailureCause } from "../TS33128Payloads/SCEFFailureCause.ta.mjs";
// export { SCEFFailureCause, _enum_for_SCEFFailureCause, SCEFFailureCause_userUnknown /* IMPORTED_LONG_ENUMERATION_ITEM */, userUnknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, SCEFFailureCause_niddConfigurationNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, niddConfigurationNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, SCEFFailureCause_invalidEPSBearer /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidEPSBearer /* IMPORTED_SHORT_ENUMERATION_ITEM */, SCEFFailureCause_operationNotAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, operationNotAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, SCEFFailureCause_portNotFree /* IMPORTED_LONG_ENUMERATION_ITEM */, portNotFree /* IMPORTED_SHORT_ENUMERATION_ITEM */, SCEFFailureCause_portNotAssociatedWithSpecifiedApplication /* IMPORTED_LONG_ENUMERATION_ITEM */, portNotAssociatedWithSpecifiedApplication /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SCEFFailureCause, _encode_SCEFFailureCause } from "../TS33128Payloads/SCEFFailureCause.ta.mjs";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
import { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
// export { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
import { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
import { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
// export { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
import { APN, _decode_APN, _encode_APN } from "../TS33128Payloads/APN.ta.mjs";
// export { APN, _decode_APN, _encode_APN } from "../TS33128Payloads/APN.ta.mjs";
import { RDSPortNumber, _decode_RDSPortNumber, _encode_RDSPortNumber } from "../TS33128Payloads/RDSPortNumber.ta.mjs";
// export { RDSPortNumber, _decode_RDSPortNumber, _encode_RDSPortNumber } from "../TS33128Payloads/RDSPortNumber.ta.mjs";
import { ApplicationID, _decode_ApplicationID, _encode_ApplicationID } from "../TS33128Payloads/ApplicationID.ta.mjs";
// export { ApplicationID, _decode_ApplicationID, _encode_ApplicationID } from "../TS33128Payloads/ApplicationID.ta.mjs";
import { SCSASID, _decode_SCSASID, _encode_SCSASID } from "../TS33128Payloads/SCSASID.ta.mjs";
// export { SCSASID, _decode_SCSASID, _encode_SCSASID } from "../TS33128Payloads/SCSASID.ta.mjs";


/**
 * @summary SCEFUnsuccessfulProcedure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCEFUnsuccessfulProcedure ::= SEQUENCE
 * {
 *     failureCause                 [1] SCEFFailureCause,
 *     iMSI                         [2] IMSI OPTIONAL,
 *     mSISDN                       [3] MSISDN OPTIONAL,
 *     externalIdentifier           [4] NAI OPTIONAL,
 *     ePSBearerID                  [5] EPSBearerID,
 *     aPN                          [6] APN,
 *     rDSDestinationPortNumber     [7] RDSPortNumber OPTIONAL,
 *     applicationID                [8] ApplicationID OPTIONAL,
 *     sCSASID                      [9] SCSASID
 * }
 * ```
 * 
 * @class
 */
export
class SCEFUnsuccessfulProcedure {
    constructor (
        /**
         * @summary `failureCause`.
         * @public
         * @readonly
         */
        readonly failureCause: SCEFFailureCause,
        /**
         * @summary `iMSI`.
         * @public
         * @readonly
         */
        readonly iMSI: OPTIONAL<IMSI>,
        /**
         * @summary `mSISDN`.
         * @public
         * @readonly
         */
        readonly mSISDN: OPTIONAL<MSISDN>,
        /**
         * @summary `externalIdentifier`.
         * @public
         * @readonly
         */
        readonly externalIdentifier: OPTIONAL<NAI>,
        /**
         * @summary `ePSBearerID`.
         * @public
         * @readonly
         */
        readonly ePSBearerID: EPSBearerID,
        /**
         * @summary `aPN`.
         * @public
         * @readonly
         */
        readonly aPN: APN,
        /**
         * @summary `rDSDestinationPortNumber`.
         * @public
         * @readonly
         */
        readonly rDSDestinationPortNumber: OPTIONAL<RDSPortNumber>,
        /**
         * @summary `applicationID`.
         * @public
         * @readonly
         */
        readonly applicationID: OPTIONAL<ApplicationID>,
        /**
         * @summary `sCSASID`.
         * @public
         * @readonly
         */
        readonly sCSASID: SCSASID
    ) {}

    /**
     * @summary Restructures an object into a SCEFUnsuccessfulProcedure
     * @description
     * 
     * This takes an `object` and converts it to a `SCEFUnsuccessfulProcedure`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SCEFUnsuccessfulProcedure`.
     * @returns {SCEFUnsuccessfulProcedure}
     */
    public static _from_object (_o: { [_K in keyof (SCEFUnsuccessfulProcedure)]: (SCEFUnsuccessfulProcedure)[_K] }): SCEFUnsuccessfulProcedure {
        return new SCEFUnsuccessfulProcedure(_o.failureCause, _o.iMSI, _o.mSISDN, _o.externalIdentifier, _o.ePSBearerID, _o.aPN, _o.rDSDestinationPortNumber, _o.applicationID, _o.sCSASID);
    }

        /**
         * @summary The enum used as the type of the component `failureCause`
         * @public
         * @static
         */

    public static _enum_for_failureCause = _enum_for_SCEFFailureCause;
}

/**
 * @summary The Leading Root Component Types of SCEFUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SCEFUnsuccessfulProcedure: $.ComponentSpec[] = [
    new $.ComponentSpec("failureCause", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iMSI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mSISDN", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("externalIdentifier", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("ePSBearerID", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("aPN", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("rDSDestinationPortNumber", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("applicationID", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("sCSASID", false, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of SCEFUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SCEFUnsuccessfulProcedure: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SCEFUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SCEFUnsuccessfulProcedure: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SCEFUnsuccessfulProcedure: $.ASN1Decoder<SCEFUnsuccessfulProcedure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCEFUnsuccessfulProcedure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCEFUnsuccessfulProcedure (el: _Element): SCEFUnsuccessfulProcedure {
    if (!_cached_decoder_for_SCEFUnsuccessfulProcedure) { _cached_decoder_for_SCEFUnsuccessfulProcedure = function (el: _Element): SCEFUnsuccessfulProcedure {
    let failureCause!: SCEFFailureCause;
    let iMSI: OPTIONAL<IMSI>;
    let mSISDN: OPTIONAL<MSISDN>;
    let externalIdentifier: OPTIONAL<NAI>;
    let ePSBearerID!: EPSBearerID;
    let aPN!: APN;
    let rDSDestinationPortNumber: OPTIONAL<RDSPortNumber>;
    let applicationID: OPTIONAL<ApplicationID>;
    let sCSASID!: SCSASID;
    const callbacks: $.DecodingMap = {
        "failureCause": (_el: _Element): void => { failureCause = $._decode_implicit<SCEFFailureCause>(() => _decode_SCEFFailureCause)(_el); },
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "mSISDN": (_el: _Element): void => { mSISDN = $._decode_implicit<MSISDN>(() => _decode_MSISDN)(_el); },
        "externalIdentifier": (_el: _Element): void => { externalIdentifier = $._decode_implicit<NAI>(() => _decode_NAI)(_el); },
        "ePSBearerID": (_el: _Element): void => { ePSBearerID = $._decode_implicit<EPSBearerID>(() => _decode_EPSBearerID)(_el); },
        "aPN": (_el: _Element): void => { aPN = $._decode_implicit<APN>(() => _decode_APN)(_el); },
        "rDSDestinationPortNumber": (_el: _Element): void => { rDSDestinationPortNumber = $._decode_implicit<RDSPortNumber>(() => _decode_RDSPortNumber)(_el); },
        "applicationID": (_el: _Element): void => { applicationID = $._decode_implicit<ApplicationID>(() => _decode_ApplicationID)(_el); },
        "sCSASID": (_el: _Element): void => { sCSASID = $._decode_implicit<SCSASID>(() => _decode_SCSASID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SCEFUnsuccessfulProcedure,
        _extension_additions_list_spec_for_SCEFUnsuccessfulProcedure,
        _root_component_type_list_2_spec_for_SCEFUnsuccessfulProcedure,
        undefined,
    );
    return new SCEFUnsuccessfulProcedure(
        failureCause,
        iMSI,
        mSISDN,
        externalIdentifier,
        ePSBearerID,
        aPN,
        rDSDestinationPortNumber,
        applicationID,
        sCSASID
    );
}; }
    return _cached_decoder_for_SCEFUnsuccessfulProcedure(el);
}

let _cached_encoder_for_SCEFUnsuccessfulProcedure: $.ASN1Encoder<SCEFUnsuccessfulProcedure> | null = null;

/**
 * @summary Encodes a(n) SCEFUnsuccessfulProcedure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCEFUnsuccessfulProcedure, encoded as an ASN.1 Element.
 */
export
function _encode_SCEFUnsuccessfulProcedure (value: SCEFUnsuccessfulProcedure, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCEFUnsuccessfulProcedure) { _cached_encoder_for_SCEFUnsuccessfulProcedure = function (value: SCEFUnsuccessfulProcedure, elGetter: $.ASN1Encoder<SCEFUnsuccessfulProcedure>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SCEFFailureCause, $.BER)(value.failureCause, $.BER),
            /* IF_ABSENT  */ ((value.iMSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_IMSI, $.BER)(value.iMSI, $.BER)),
            /* IF_ABSENT  */ ((value.mSISDN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_MSISDN, $.BER)(value.mSISDN, $.BER)),
            /* IF_ABSENT  */ ((value.externalIdentifier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_NAI, $.BER)(value.externalIdentifier, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_EPSBearerID, $.BER)(value.ePSBearerID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_APN, $.BER)(value.aPN, $.BER),
            /* IF_ABSENT  */ ((value.rDSDestinationPortNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_RDSPortNumber, $.BER)(value.rDSDestinationPortNumber, $.BER)),
            /* IF_ABSENT  */ ((value.applicationID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_ApplicationID, $.BER)(value.applicationID, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => _encode_SCSASID, $.BER)(value.sCSASID, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SCEFUnsuccessfulProcedure(value, elGetter);
}


/* eslint-enable */
