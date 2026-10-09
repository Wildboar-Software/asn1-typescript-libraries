import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    CertificateSerialNumber,
    Extensions,
    Name,
    SIGNED,
    Time,
    Version,
    _decode_AlgorithmIdentifier,
    _decode_CertificateSerialNumber,
    _decode_Extensions,
    _decode_Name,
    _decode_Time,
    _decode_Version,
    _encode_AlgorithmIdentifier,
    _encode_CertificateSerialNumber,
    _encode_Extensions,
    _encode_Name,
    _encode_Time,
    _encode_Version,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "@wildboar/pki-stub";

/**
 * One CRL entry. `pki-stub` does not export `CertificateList`, so this is the
 * inner sequence of X.509 `CertificateListContent.revokedCertificates`.
 *
 * ```asn1
 * SEQUENCE {
 *   serialNumber        CertificateSerialNumber,
 *   revocationDate      Time,
 *   crlEntryExtensions  Extensions OPTIONAL,
 *   ...
 * }
 * ```
 */
export class RevokedCertificate {
    constructor(
        readonly serialNumber: CertificateSerialNumber,
        readonly revocationDate: Time,
        readonly crlEntryExtensions?: OPTIONAL<Extensions>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}
}

const _revoked_root_1: $.ComponentSpec[] = [
    new $.ComponentSpec("serialNumber", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("revocationDate", false, $.hasAnyTag),
    new $.ComponentSpec("crlEntryExtensions", true, $.hasTag(_TagClass.universal, 16)),
];

export function _decode_RevokedCertificate(el: _Element): RevokedCertificate {
    let serialNumber!: CertificateSerialNumber;
    let revocationDate!: Time;
    let crlEntryExtensions: OPTIONAL<Extensions>;
    const unrecognized: _Element[] = [];
    $._parse_sequence(el, {
        serialNumber: (_el: _Element): void => { serialNumber = _decode_CertificateSerialNumber(_el); },
        revocationDate: (_el: _Element): void => { revocationDate = _decode_Time(_el); },
        crlEntryExtensions: (_el: _Element): void => { crlEntryExtensions = _decode_Extensions(_el); },
    }, _revoked_root_1, [], [], (ext: _Element): void => { unrecognized.push(ext); });
    return new RevokedCertificate(serialNumber, revocationDate, crlEntryExtensions, unrecognized);
}

export function _encode_RevokedCertificate(value: RevokedCertificate, elGetter: $.ASN1Encoder<RevokedCertificate>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            _encode_CertificateSerialNumber(value.serialNumber, $.DER),
            _encode_Time(value.revocationDate, $.DER),
            value.crlEntryExtensions === undefined
                ? undefined
                : _encode_Extensions(value.crlEntryExtensions, $.DER),
        ],
        value._unrecognizedExtensionsList,
    ).filter((c: _Element | undefined): c is _Element => !!c), $.DER);
}

/**
 * To-be-signed CRL content. Defined here because `@wildboar/pki-stub` exports
 * the component types but not `CertificateList` itself.
 *
 * ```asn1
 * CertificateListContent ::= SEQUENCE {
 *   version              Version OPTIONAL,
 *   signature            AlgorithmIdentifier{{SupportedAlgorithms}},
 *   issuer               Name,
 *   thisUpdate           Time,
 *   nextUpdate           Time OPTIONAL,
 *   revokedCertificates  SEQUENCE OF SEQUENCE {
 *     serialNumber         CertificateSerialNumber,
 *     revocationDate       Time,
 *     crlEntryExtensions   Extensions OPTIONAL,
 *     ...
 *   } OPTIONAL,
 *   ...,
 *   ...,
 *   crlExtensions        [0] Extensions OPTIONAL
 * }
 * ```
 */
export class CertificateListContent {
    constructor(
        readonly version: OPTIONAL<Version>,
        readonly signature: AlgorithmIdentifier,
        readonly issuer: Name,
        readonly thisUpdate: Time,
        readonly nextUpdate?: OPTIONAL<Time>,
        readonly revokedCertificates?: OPTIONAL<RevokedCertificate[]>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
        readonly crlExtensions?: OPTIONAL<Extensions>,
    ) {}
}

const _content_root_1: $.ComponentSpec[] = [
    new $.ComponentSpec("version", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("signature", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("issuer", false, $.hasAnyTag),
    new $.ComponentSpec("thisUpdate", false, $.or($.hasTag(_TagClass.universal, 23), $.hasTag(_TagClass.universal, 24))),
    new $.ComponentSpec("nextUpdate", true, $.or($.hasTag(_TagClass.universal, 23), $.hasTag(_TagClass.universal, 24))),
    new $.ComponentSpec("revokedCertificates", true, $.hasTag(_TagClass.universal, 16)),
];

const _content_root_2: $.ComponentSpec[] = [
    new $.ComponentSpec("crlExtensions", true, $.hasTag(_TagClass.context, 0)),
];

export function _decode_CertificateListContent(el: _Element): CertificateListContent {
    let version: OPTIONAL<Version>;
    let signature!: AlgorithmIdentifier;
    let issuer!: Name;
    let thisUpdate!: Time;
    let nextUpdate: OPTIONAL<Time>;
    let revokedCertificates: OPTIONAL<RevokedCertificate[]>;
    let crlExtensions: OPTIONAL<Extensions>;
    const unrecognized: _Element[] = [];
    $._parse_sequence(el, {
        version: (_el: _Element): void => { version = _decode_Version(_el); },
        signature: (_el: _Element): void => { signature = _decode_AlgorithmIdentifier(_el); },
        issuer: (_el: _Element): void => { issuer = _decode_Name(_el); },
        thisUpdate: (_el: _Element): void => { thisUpdate = _decode_Time(_el); },
        nextUpdate: (_el: _Element): void => { nextUpdate = _decode_Time(_el); },
        revokedCertificates: (_el: _Element): void => {
            revokedCertificates = $._decodeSequenceOf<RevokedCertificate>(() => _decode_RevokedCertificate)(_el);
        },
        crlExtensions: (_el: _Element): void => {
            crlExtensions = $._decode_explicit<Extensions>(() => _decode_Extensions)(_el);
        },
    }, _content_root_1, [], _content_root_2, (ext: _Element): void => { unrecognized.push(ext); });
    return new CertificateListContent(
        version,
        signature,
        issuer,
        thisUpdate,
        nextUpdate,
        revokedCertificates,
        unrecognized,
        crlExtensions,
    );
}

export function _encode_CertificateListContent(value: CertificateListContent, elGetter: $.ASN1Encoder<CertificateListContent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            value.version === undefined ? undefined : _encode_Version(value.version, $.DER),
            _encode_AlgorithmIdentifier(value.signature, $.DER),
            _encode_Name(value.issuer, $.DER),
            _encode_Time(value.thisUpdate, $.DER),
            value.nextUpdate === undefined ? undefined : _encode_Time(value.nextUpdate, $.DER),
            value.revokedCertificates === undefined
                ? undefined
                : $._encodeSequenceOf<RevokedCertificate>(() => _encode_RevokedCertificate, $.DER)(value.revokedCertificates, $.DER),
        ],
        value._unrecognizedExtensionsList,
        [
            value.crlExtensions === undefined
                ? undefined
                : $._encode_explicit(_TagClass.context, 0, () => _encode_Extensions, $.DER)(value.crlExtensions, $.DER),
        ],
    ).filter((c: _Element | undefined): c is _Element => !!c), $.DER);
}

/**
 * ```asn1
 * CertificateList ::= SIGNED{CertificateListContent}
 * ```
 */
export type CertificateList = SIGNED<CertificateListContent>;

const _decode_signed_certificate_list = _get_decoder_for_SIGNED<CertificateListContent>(_decode_CertificateListContent);
const _encode_signed_certificate_list = _get_encoder_for_SIGNED<CertificateListContent>(_encode_CertificateListContent);

export function _decode_CertificateList(el: _Element): CertificateList {
    return _decode_signed_certificate_list(el);
}

export function _encode_CertificateList(value: CertificateList, elGetter: $.ASN1Encoder<CertificateList>): _Element {
    return _encode_signed_certificate_list(value, elGetter);
}
