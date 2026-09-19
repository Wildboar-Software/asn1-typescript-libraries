/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
import { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
// export { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
import { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
import { Initiator, _decode_Initiator, _encode_Initiator, _enum_for_Initiator } from "../TS33128Payloads/Initiator.ta.mjs";
// export { Initiator, _enum_for_Initiator, Initiator_uE /* IMPORTED_LONG_ENUMERATION_ITEM */, uE /* IMPORTED_SHORT_ENUMERATION_ITEM */, Initiator_network /* IMPORTED_LONG_ENUMERATION_ITEM */, network /* IMPORTED_SHORT_ENUMERATION_ITEM */, Initiator_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Initiator, _encode_Initiator } from "../TS33128Payloads/Initiator.ta.mjs";
import { RDSPortNumber, _decode_RDSPortNumber, _encode_RDSPortNumber } from "../TS33128Payloads/RDSPortNumber.ta.mjs";
// export { RDSPortNumber, _decode_RDSPortNumber, _encode_RDSPortNumber } from "../TS33128Payloads/RDSPortNumber.ta.mjs";
import { ApplicationID, _decode_ApplicationID, _encode_ApplicationID } from "../TS33128Payloads/ApplicationID.ta.mjs";
// export { ApplicationID, _decode_ApplicationID, _encode_ApplicationID } from "../TS33128Payloads/ApplicationID.ta.mjs";
import { SCSASID, _decode_SCSASID, _encode_SCSASID } from "../TS33128Payloads/SCSASID.ta.mjs";
// export { SCSASID, _decode_SCSASID, _encode_SCSASID } from "../TS33128Payloads/SCSASID.ta.mjs";
import { RDSAction, _decode_RDSAction, _encode_RDSAction, _enum_for_RDSAction } from "../TS33128Payloads/RDSAction.ta.mjs";
// export { RDSAction, _enum_for_RDSAction, RDSAction_reservePort /* IMPORTED_LONG_ENUMERATION_ITEM */, reservePort /* IMPORTED_SHORT_ENUMERATION_ITEM */, RDSAction_releasePort /* IMPORTED_LONG_ENUMERATION_ITEM */, releasePort /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RDSAction, _encode_RDSAction } from "../TS33128Payloads/RDSAction.ta.mjs";
import { SerializationFormat, _decode_SerializationFormat, _encode_SerializationFormat, _enum_for_SerializationFormat } from "../TS33128Payloads/SerializationFormat.ta.mjs";
// export { SerializationFormat, _enum_for_SerializationFormat, SerializationFormat_xml /* IMPORTED_LONG_ENUMERATION_ITEM */, xml /* IMPORTED_SHORT_ENUMERATION_ITEM */, SerializationFormat_json /* IMPORTED_LONG_ENUMERATION_ITEM */, json /* IMPORTED_SHORT_ENUMERATION_ITEM */, SerializationFormat_cbor /* IMPORTED_LONG_ENUMERATION_ITEM */, cbor /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SerializationFormat, _encode_SerializationFormat } from "../TS33128Payloads/SerializationFormat.ta.mjs";
import { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
// export { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";


/**
 * @summary SCEFPDNConnectionUpdate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCEFPDNConnectionUpdate ::= SEQUENCE
 * {
 *     iMSI                         [1] IMSI OPTIONAL,
 *     mSISDN                       [2] MSISDN OPTIONAL,
 *     externalIdentifier           [3] NAI OPTIONAL,
 *     initiator                    [4] Initiator,
 *     rDSSourcePortNumber          [5] RDSPortNumber OPTIONAL,
 *     rDSDestinationPortNumber     [6] RDSPortNumber OPTIONAL,
 *     applicationID                [7] ApplicationID OPTIONAL,
 *     sCSASID                      [8] SCSASID OPTIONAL,
 *     rDSAction                    [9] RDSAction OPTIONAL,
 *     serializationFormat          [10] SerializationFormat OPTIONAL,
 *     ePSBearerID                  [11] EPSBearerID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SCEFPDNConnectionUpdate {
    constructor (
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
         * @summary `initiator`.
         * @public
         * @readonly
         */
        readonly initiator: Initiator,
        /**
         * @summary `rDSSourcePortNumber`.
         * @public
         * @readonly
         */
        readonly rDSSourcePortNumber: OPTIONAL<RDSPortNumber>,
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
        readonly sCSASID: OPTIONAL<SCSASID>,
        /**
         * @summary `rDSAction`.
         * @public
         * @readonly
         */
        readonly rDSAction: OPTIONAL<RDSAction>,
        /**
         * @summary `serializationFormat`.
         * @public
         * @readonly
         */
        readonly serializationFormat: OPTIONAL<SerializationFormat>,
        /**
         * @summary `ePSBearerID`.
         * @public
         * @readonly
         */
        readonly ePSBearerID: OPTIONAL<EPSBearerID>
    ) {}

    /**
     * @summary Restructures an object into a SCEFPDNConnectionUpdate
     * @description
     * 
     * This takes an `object` and converts it to a `SCEFPDNConnectionUpdate`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SCEFPDNConnectionUpdate`.
     * @returns {SCEFPDNConnectionUpdate}
     */
    public static _from_object (_o: { [_K in keyof (SCEFPDNConnectionUpdate)]: (SCEFPDNConnectionUpdate)[_K] }): SCEFPDNConnectionUpdate {
        return new SCEFPDNConnectionUpdate(_o.iMSI, _o.mSISDN, _o.externalIdentifier, _o.initiator, _o.rDSSourcePortNumber, _o.rDSDestinationPortNumber, _o.applicationID, _o.sCSASID, _o.rDSAction, _o.serializationFormat, _o.ePSBearerID);
    }

        /**
         * @summary The enum used as the type of the component `initiator`
         * @public
         * @static
         */

    public static _enum_for_initiator = _enum_for_Initiator;        /**
         * @summary The enum used as the type of the component `rDSAction`
         * @public
         * @static
         */

    public static _enum_for_rDSAction = _enum_for_RDSAction;        /**
         * @summary The enum used as the type of the component `serializationFormat`
         * @public
         * @static
         */

    public static _enum_for_serializationFormat = _enum_for_SerializationFormat;
}

/**
 * @summary The Leading Root Component Types of SCEFPDNConnectionUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SCEFPDNConnectionUpdate: $.ComponentSpec[] = [
    new $.ComponentSpec("iMSI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mSISDN", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("externalIdentifier", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("initiator", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("rDSSourcePortNumber", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("rDSDestinationPortNumber", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("applicationID", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("sCSASID", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("rDSAction", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("serializationFormat", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("ePSBearerID", true, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of SCEFPDNConnectionUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SCEFPDNConnectionUpdate: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SCEFPDNConnectionUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SCEFPDNConnectionUpdate: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SCEFPDNConnectionUpdate: $.ASN1Decoder<SCEFPDNConnectionUpdate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCEFPDNConnectionUpdate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCEFPDNConnectionUpdate (el: _Element): SCEFPDNConnectionUpdate {
    if (!_cached_decoder_for_SCEFPDNConnectionUpdate) { _cached_decoder_for_SCEFPDNConnectionUpdate = function (el: _Element): SCEFPDNConnectionUpdate {
    let iMSI: OPTIONAL<IMSI>;
    let mSISDN: OPTIONAL<MSISDN>;
    let externalIdentifier: OPTIONAL<NAI>;
    let initiator!: Initiator;
    let rDSSourcePortNumber: OPTIONAL<RDSPortNumber>;
    let rDSDestinationPortNumber: OPTIONAL<RDSPortNumber>;
    let applicationID: OPTIONAL<ApplicationID>;
    let sCSASID: OPTIONAL<SCSASID>;
    let rDSAction: OPTIONAL<RDSAction>;
    let serializationFormat: OPTIONAL<SerializationFormat>;
    let ePSBearerID: OPTIONAL<EPSBearerID>;
    const callbacks: $.DecodingMap = {
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "mSISDN": (_el: _Element): void => { mSISDN = $._decode_implicit<MSISDN>(() => _decode_MSISDN)(_el); },
        "externalIdentifier": (_el: _Element): void => { externalIdentifier = $._decode_implicit<NAI>(() => _decode_NAI)(_el); },
        "initiator": (_el: _Element): void => { initiator = $._decode_implicit<Initiator>(() => _decode_Initiator)(_el); },
        "rDSSourcePortNumber": (_el: _Element): void => { rDSSourcePortNumber = $._decode_implicit<RDSPortNumber>(() => _decode_RDSPortNumber)(_el); },
        "rDSDestinationPortNumber": (_el: _Element): void => { rDSDestinationPortNumber = $._decode_implicit<RDSPortNumber>(() => _decode_RDSPortNumber)(_el); },
        "applicationID": (_el: _Element): void => { applicationID = $._decode_implicit<ApplicationID>(() => _decode_ApplicationID)(_el); },
        "sCSASID": (_el: _Element): void => { sCSASID = $._decode_implicit<SCSASID>(() => _decode_SCSASID)(_el); },
        "rDSAction": (_el: _Element): void => { rDSAction = $._decode_implicit<RDSAction>(() => _decode_RDSAction)(_el); },
        "serializationFormat": (_el: _Element): void => { serializationFormat = $._decode_implicit<SerializationFormat>(() => _decode_SerializationFormat)(_el); },
        "ePSBearerID": (_el: _Element): void => { ePSBearerID = $._decode_implicit<EPSBearerID>(() => _decode_EPSBearerID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SCEFPDNConnectionUpdate,
        _extension_additions_list_spec_for_SCEFPDNConnectionUpdate,
        _root_component_type_list_2_spec_for_SCEFPDNConnectionUpdate,
        undefined,
    );
    return new SCEFPDNConnectionUpdate(
        iMSI,
        mSISDN,
        externalIdentifier,
        initiator,
        rDSSourcePortNumber,
        rDSDestinationPortNumber,
        applicationID,
        sCSASID,
        rDSAction,
        serializationFormat,
        ePSBearerID
    );
}; }
    return _cached_decoder_for_SCEFPDNConnectionUpdate(el);
}

let _cached_encoder_for_SCEFPDNConnectionUpdate: $.ASN1Encoder<SCEFPDNConnectionUpdate> | null = null;

/**
 * @summary Encodes a(n) SCEFPDNConnectionUpdate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCEFPDNConnectionUpdate, encoded as an ASN.1 Element.
 */
export
function _encode_SCEFPDNConnectionUpdate (value: SCEFPDNConnectionUpdate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCEFPDNConnectionUpdate) { _cached_encoder_for_SCEFPDNConnectionUpdate = function (value: SCEFPDNConnectionUpdate, elGetter: $.ASN1Encoder<SCEFPDNConnectionUpdate>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.iMSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER)(value.iMSI, $.BER)),
            /* IF_ABSENT  */ ((value.mSISDN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_MSISDN, $.BER)(value.mSISDN, $.BER)),
            /* IF_ABSENT  */ ((value.externalIdentifier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_NAI, $.BER)(value.externalIdentifier, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_Initiator, $.BER)(value.initiator, $.BER),
            /* IF_ABSENT  */ ((value.rDSSourcePortNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_RDSPortNumber, $.BER)(value.rDSSourcePortNumber, $.BER)),
            /* IF_ABSENT  */ ((value.rDSDestinationPortNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_RDSPortNumber, $.BER)(value.rDSDestinationPortNumber, $.BER)),
            /* IF_ABSENT  */ ((value.applicationID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_ApplicationID, $.BER)(value.applicationID, $.BER)),
            /* IF_ABSENT  */ ((value.sCSASID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_SCSASID, $.BER)(value.sCSASID, $.BER)),
            /* IF_ABSENT  */ ((value.rDSAction === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_RDSAction, $.BER)(value.rDSAction, $.BER)),
            /* IF_ABSENT  */ ((value.serializationFormat === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_SerializationFormat, $.BER)(value.serializationFormat, $.BER)),
            /* IF_ABSENT  */ ((value.ePSBearerID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_EPSBearerID, $.BER)(value.ePSBearerID, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SCEFPDNConnectionUpdate(value, elGetter);
}


/* eslint-enable */
