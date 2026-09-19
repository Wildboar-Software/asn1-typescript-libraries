/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { KerberosTime, _decode_KerberosTime, _encode_KerberosTime } from "../KerberosV5Spec2/KerberosTime.ta.mjs";
// export { KerberosTime, _decode_KerberosTime, _encode_KerberosTime } from "../KerberosV5Spec2/KerberosTime.ta.mjs";
import { PAChecksum2, _decode_PAChecksum2, _encode_PAChecksum2 } from "../KerberosV5-PK-INIT-SPEC/PAChecksum2.ta.mjs";
// export { PAChecksum2, _decode_PAChecksum2, _encode_PAChecksum2 } from "../KerberosV5-PK-INIT-SPEC/PAChecksum2.ta.mjs";


/**
 * @summary PKAuthenticator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PKAuthenticator ::= SEQUENCE {
 *     cusec                   [0] INTEGER (0..999999),
 *     ctime                   [1] KerberosTime,
 *             -- cusec and ctime are used as in [RFC4120], for
 *             -- replay prevention.
 *     nonce                   [2] INTEGER (0..4294967295),
 *             -- Chosen randomly; this nonce does not need to
 *             -- match with the nonce in the KDC-REQ-BODY.
 *     paChecksum              [3] OCTET STRING OPTIONAL,
 *             -- MUST be present.
 *             -- Contains the SHA1 checksum, performed over
 *             -- KDC-REQ-BODY.
 *     freshnessToken          [4] OCTET STRING OPTIONAL,
 *             -- PA_AS_FRESHNESS padata value as received from the
 *             -- KDC. MUST be present if sent by KDC
 * -- WS addition (MS-PKCA v20230920 2.2.3)
 *     paChecksum2             [5] PAChecksum2 OPTIONAL,
 *             -- Depending of configuration and algorithms used to
 *             -- sign the AuthPack, Windows Server 2025 and newer
 *             -- may require this element to be present.
 * -- End WS addition
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class PKAuthenticator {
    constructor (
        /**
         * @summary `cusec`.
         * @public
         * @readonly
         */
        readonly cusec: INTEGER,
        /**
         * @summary `ctime`.
         * @public
         * @readonly
         */
        readonly ctime: KerberosTime,
        /**
         * @summary `nonce`.
         * @public
         * @readonly
         */
        readonly nonce: INTEGER,
        /**
         * @summary `paChecksum`.
         * @public
         * @readonly
         */
        readonly paChecksum: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `freshnessToken`.
         * @public
         * @readonly
         */
        readonly freshnessToken: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `paChecksum2`.
         * @public
         * @readonly
         */
        readonly paChecksum2: OPTIONAL<PAChecksum2>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PKAuthenticator
     * @description
     * 
     * This takes an `object` and converts it to a `PKAuthenticator`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PKAuthenticator`.
     * @returns {PKAuthenticator}
     */
    public static _from_object (_o: { [_K in keyof (PKAuthenticator)]: (PKAuthenticator)[_K] }): PKAuthenticator {
        return new PKAuthenticator(_o.cusec, _o.ctime, _o.nonce, _o.paChecksum, _o.freshnessToken, _o.paChecksum2, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PKAuthenticator
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PKAuthenticator: $.ComponentSpec[] = [
    new $.ComponentSpec("cusec", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("ctime", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("nonce", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("paChecksum", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("freshnessToken", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("paChecksum2", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of PKAuthenticator
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PKAuthenticator: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PKAuthenticator
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PKAuthenticator: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PKAuthenticator: $.ASN1Decoder<PKAuthenticator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PKAuthenticator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PKAuthenticator (el: _Element): PKAuthenticator {
    if (!_cached_decoder_for_PKAuthenticator) { _cached_decoder_for_PKAuthenticator = function (el: _Element): PKAuthenticator {
    let cusec!: INTEGER;
    let ctime!: KerberosTime;
    let nonce!: INTEGER;
    let paChecksum: OPTIONAL<OCTET_STRING>;
    let freshnessToken: OPTIONAL<OCTET_STRING>;
    let paChecksum2: OPTIONAL<PAChecksum2>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "cusec": (_el: _Element): void => { cusec = $._decode_explicit<INTEGER>(() => $._decodeInteger)(_el); },
        "ctime": (_el: _Element): void => { ctime = $._decode_explicit<KerberosTime>(() => _decode_KerberosTime)(_el); },
        "nonce": (_el: _Element): void => { nonce = $._decode_explicit<INTEGER>(() => $._decodeInteger)(_el); },
        "paChecksum": (_el: _Element): void => { paChecksum = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "freshnessToken": (_el: _Element): void => { freshnessToken = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "paChecksum2": (_el: _Element): void => { paChecksum2 = $._decode_explicit<PAChecksum2>(() => _decode_PAChecksum2)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PKAuthenticator,
        _extension_additions_list_spec_for_PKAuthenticator,
        _root_component_type_list_2_spec_for_PKAuthenticator,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PKAuthenticator(
        cusec,
        ctime,
        nonce,
        paChecksum,
        freshnessToken,
        paChecksum2,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PKAuthenticator(el);
}

let _cached_encoder_for_PKAuthenticator: $.ASN1Encoder<PKAuthenticator> | null = null;

/**
 * @summary Encodes a(n) PKAuthenticator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKAuthenticator, encoded as an ASN.1 Element.
 */
export
function _encode_PKAuthenticator (value: PKAuthenticator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PKAuthenticator) { _cached_encoder_for_PKAuthenticator = function (value: PKAuthenticator, elGetter: $.ASN1Encoder<PKAuthenticator>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.cusec, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_KerberosTime, $.BER)(value.ctime, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.nonce, $.BER),
            /* IF_ABSENT  */ ((value.paChecksum === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.paChecksum, $.BER)),
            /* IF_ABSENT  */ ((value.freshnessToken === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.freshnessToken, $.BER)),
            /* IF_ABSENT  */ ((value.paChecksum2 === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_PAChecksum2, $.BER)(value.paChecksum2, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PKAuthenticator(value, elGetter);
}


/* eslint-enable */
