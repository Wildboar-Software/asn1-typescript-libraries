/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { KDCOptions, _decode_KDCOptions, _encode_KDCOptions } from "../KerberosV5Spec2/KDCOptions.ta.mjs";
// export { KDCOptions, _decode_KDCOptions, _encode_KDCOptions } from "../KerberosV5Spec2/KDCOptions.ta.mjs";
import { PrincipalName, _decode_PrincipalName, _encode_PrincipalName } from "../KerberosV5Spec2/PrincipalName.ta.mjs";
// export { PrincipalName, _decode_PrincipalName, _encode_PrincipalName } from "../KerberosV5Spec2/PrincipalName.ta.mjs";
import { Realm, _decode_Realm, _encode_Realm } from "../KerberosV5Spec2/Realm.ta.mjs";
// export { Realm, _decode_Realm, _encode_Realm } from "../KerberosV5Spec2/Realm.ta.mjs";
import { KerberosTime, _decode_KerberosTime, _encode_KerberosTime } from "../KerberosV5Spec2/KerberosTime.ta.mjs";
// export { KerberosTime, _decode_KerberosTime, _encode_KerberosTime } from "../KerberosV5Spec2/KerberosTime.ta.mjs";
import { UInt32, _decode_UInt32, _encode_UInt32 } from "../KerberosV5Spec2/UInt32.ta.mjs";
// export { UInt32, _decode_UInt32, _encode_UInt32 } from "../KerberosV5Spec2/UInt32.ta.mjs";
import { Int32, _decode_Int32, _encode_Int32 } from "../KerberosV5Spec2/Int32.ta.mjs";
// export { Int32, _decode_Int32, _encode_Int32 } from "../KerberosV5Spec2/Int32.ta.mjs";
import { HostAddresses, _decode_HostAddresses, _encode_HostAddresses } from "../KerberosV5Spec2/HostAddresses.ta.mjs";
// export { HostAddresses, _decode_HostAddresses, _encode_HostAddresses } from "../KerberosV5Spec2/HostAddresses.ta.mjs";
import { EncryptedData, _decode_EncryptedData, _encode_EncryptedData } from "../KerberosV5Spec2/EncryptedData.ta.mjs";
// export { EncryptedData, _decode_EncryptedData, _encode_EncryptedData } from "../KerberosV5Spec2/EncryptedData.ta.mjs";
import { Ticket, _decode_Ticket, _encode_Ticket } from "../KerberosV5Spec2/Ticket.ta.mjs";
// export { Ticket, _decode_Ticket, _encode_Ticket } from "../KerberosV5Spec2/Ticket.ta.mjs";


/**
 * @summary KDC_REQ_BODY
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KDC-REQ-BODY ::= SEQUENCE {
 *         kdc-options             [0] KDCOptions,
 * 
 *         cname                   [1] PrincipalName OPTIONAL
 *                                     -- Used only in AS-REQ --,
 *         realm                   [2] Realm
 *                                     -- Server's realm
 *                                     -- Also client's in AS-REQ --,
 *         sname                   [3] PrincipalName OPTIONAL,
 *         from                    [4] KerberosTime OPTIONAL,
 *         till                    [5] KerberosTime,
 *         rtime                   [6] KerberosTime OPTIONAL,
 *         nonce                   [7] UInt32,
 *         etype                   [8] SEQUENCE OF Int32 -- EncryptionType
 *                                     -- in preference order --,
 *         addresses               [9] HostAddresses OPTIONAL,
 *         enc-authorization-data  [10] EncryptedData OPTIONAL
 *                                     -- AuthorizationData --,
 *         additional-tickets      [11] SEQUENCE OF Ticket OPTIONAL
 *                                         -- NOTE: not empty
 * }
 * ```
 * 
 * @class
 */
export
class KDC_REQ_BODY {
    constructor (
        /**
         * @summary `kdc_options`.
         * @public
         * @readonly
         */
        readonly kdc_options: KDCOptions,
        /**
         * @summary `cname`.
         * @public
         * @readonly
         */
        readonly cname: OPTIONAL<PrincipalName>,
        /**
         * @summary `realm`.
         * @public
         * @readonly
         */
        readonly realm: Realm,
        /**
         * @summary `sname`.
         * @public
         * @readonly
         */
        readonly sname: OPTIONAL<PrincipalName>,
        /**
         * @summary `from_`.
         * @public
         * @readonly
         */
        readonly from_: OPTIONAL<KerberosTime>,
        /**
         * @summary `till`.
         * @public
         * @readonly
         */
        readonly till: KerberosTime,
        /**
         * @summary `rtime`.
         * @public
         * @readonly
         */
        readonly rtime: OPTIONAL<KerberosTime>,
        /**
         * @summary `nonce`.
         * @public
         * @readonly
         */
        readonly nonce: UInt32,
        /**
         * @summary `etype`.
         * @public
         * @readonly
         */
        readonly etype: Int32[],
        /**
         * @summary `addresses`.
         * @public
         * @readonly
         */
        readonly addresses: OPTIONAL<HostAddresses>,
        /**
         * @summary `enc_authorization_data`.
         * @public
         * @readonly
         */
        readonly enc_authorization_data: OPTIONAL<EncryptedData>,
        /**
         * @summary `additional_tickets`.
         * @public
         * @readonly
         */
        readonly additional_tickets: OPTIONAL<Ticket[]>
    ) {}

    /**
     * @summary Restructures an object into a KDC_REQ_BODY
     * @description
     * 
     * This takes an `object` and converts it to a `KDC_REQ_BODY`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KDC_REQ_BODY`.
     * @returns {KDC_REQ_BODY}
     */
    public static _from_object (_o: { [_K in keyof (KDC_REQ_BODY)]: (KDC_REQ_BODY)[_K] }): KDC_REQ_BODY {
        return new KDC_REQ_BODY(_o.kdc_options, _o.cname, _o.realm, _o.sname, _o.from_, _o.till, _o.rtime, _o.nonce, _o.etype, _o.addresses, _o.enc_authorization_data, _o.additional_tickets);
    }


}

/**
 * @summary The Leading Root Component Types of KDC_REQ_BODY
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_KDC_REQ_BODY: $.ComponentSpec[] = [
    new $.ComponentSpec("kdc-options", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("cname", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("realm", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sname", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("from", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("till", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("rtime", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("nonce", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("etype", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("addresses", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("enc-authorization-data", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("additional-tickets", true, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of KDC_REQ_BODY
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_KDC_REQ_BODY: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of KDC_REQ_BODY
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_KDC_REQ_BODY: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_KDC_REQ_BODY: $.ASN1Decoder<KDC_REQ_BODY> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KDC_REQ_BODY
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KDC_REQ_BODY (el: _Element): KDC_REQ_BODY {
    if (!_cached_decoder_for_KDC_REQ_BODY) { _cached_decoder_for_KDC_REQ_BODY = function (el: _Element): KDC_REQ_BODY {
    let kdc_options!: KDCOptions;
    let cname: OPTIONAL<PrincipalName>;
    let realm!: Realm;
    let sname: OPTIONAL<PrincipalName>;
    let from_: OPTIONAL<KerberosTime>;
    let till!: KerberosTime;
    let rtime: OPTIONAL<KerberosTime>;
    let nonce!: UInt32;
    let etype!: Int32[];
    let addresses: OPTIONAL<HostAddresses>;
    let enc_authorization_data: OPTIONAL<EncryptedData>;
    let additional_tickets: OPTIONAL<Ticket[]>;
    const callbacks: $.DecodingMap = {
        "kdc-options": (_el: _Element): void => { kdc_options = $._decode_explicit<KDCOptions>(() => _decode_KDCOptions)(_el); },
        "cname": (_el: _Element): void => { cname = $._decode_explicit<PrincipalName>(() => _decode_PrincipalName)(_el); },
        "realm": (_el: _Element): void => { realm = $._decode_explicit<Realm>(() => _decode_Realm)(_el); },
        "sname": (_el: _Element): void => { sname = $._decode_explicit<PrincipalName>(() => _decode_PrincipalName)(_el); },
        "from": (_el: _Element): void => { from_ = $._decode_explicit<KerberosTime>(() => _decode_KerberosTime)(_el); },
        "till": (_el: _Element): void => { till = $._decode_explicit<KerberosTime>(() => _decode_KerberosTime)(_el); },
        "rtime": (_el: _Element): void => { rtime = $._decode_explicit<KerberosTime>(() => _decode_KerberosTime)(_el); },
        "nonce": (_el: _Element): void => { nonce = $._decode_explicit<UInt32>(() => _decode_UInt32)(_el); },
        "etype": (_el: _Element): void => { etype = $._decode_explicit<Int32[]>(() => $._decodeSequenceOf<Int32>(() => _decode_Int32))(_el); },
        "addresses": (_el: _Element): void => { addresses = $._decode_explicit<HostAddresses>(() => _decode_HostAddresses)(_el); },
        "enc-authorization-data": (_el: _Element): void => { enc_authorization_data = $._decode_explicit<EncryptedData>(() => _decode_EncryptedData)(_el); },
        "additional-tickets": (_el: _Element): void => { additional_tickets = $._decode_explicit<Ticket[]>(() => $._decodeSequenceOf<Ticket>(() => _decode_Ticket))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_KDC_REQ_BODY,
        _extension_additions_list_spec_for_KDC_REQ_BODY,
        _root_component_type_list_2_spec_for_KDC_REQ_BODY,
        undefined,
    );
    return new KDC_REQ_BODY(
        kdc_options,
        cname,
        realm,
        sname,
        from_,
        till,
        rtime,
        nonce,
        etype,
        addresses,
        enc_authorization_data,
        additional_tickets
    );
}; }
    return _cached_decoder_for_KDC_REQ_BODY(el);
}

let _cached_encoder_for_KDC_REQ_BODY: $.ASN1Encoder<KDC_REQ_BODY> | null = null;

/**
 * @summary Encodes a(n) KDC_REQ_BODY into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KDC_REQ_BODY, encoded as an ASN.1 Element.
 */
export
function _encode_KDC_REQ_BODY (value: KDC_REQ_BODY, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KDC_REQ_BODY) { _cached_encoder_for_KDC_REQ_BODY = function (value: KDC_REQ_BODY, elGetter: $.ASN1Encoder<KDC_REQ_BODY>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_KDCOptions, $.BER)(value.kdc_options, $.BER),
            /* IF_ABSENT  */ ((value.cname === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_PrincipalName, $.BER)(value.cname, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_Realm, $.BER)(value.realm, $.BER),
            /* IF_ABSENT  */ ((value.sname === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_PrincipalName, $.BER)(value.sname, $.BER)),
            /* IF_ABSENT  */ ((value.from_ === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_KerberosTime, $.BER)(value.from_, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 5, () => _encode_KerberosTime, $.BER)(value.till, $.BER),
            /* IF_ABSENT  */ ((value.rtime === undefined) ? undefined : $._encode_explicit(_TagClass.context, 6, () => _encode_KerberosTime, $.BER)(value.rtime, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 7, () => _encode_UInt32, $.BER)(value.nonce, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 8, () => $._encodeSequenceOf<Int32>(() => _encode_Int32, $.BER), $.BER)(value.etype, $.BER),
            /* IF_ABSENT  */ ((value.addresses === undefined) ? undefined : $._encode_explicit(_TagClass.context, 9, () => _encode_HostAddresses, $.BER)(value.addresses, $.BER)),
            /* IF_ABSENT  */ ((value.enc_authorization_data === undefined) ? undefined : $._encode_explicit(_TagClass.context, 10, () => _encode_EncryptedData, $.BER)(value.enc_authorization_data, $.BER)),
            /* IF_ABSENT  */ ((value.additional_tickets === undefined) ? undefined : $._encode_explicit(_TagClass.context, 11, () => $._encodeSequenceOf<Ticket>(() => _encode_Ticket, $.BER), $.BER)(value.additional_tickets, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_KDC_REQ_BODY(value, elGetter);
}


/* eslint-enable */
