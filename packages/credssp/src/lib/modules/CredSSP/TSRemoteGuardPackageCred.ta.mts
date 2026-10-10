/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TSRemoteGuardPackageCred
 * @description
 *
 * Credentials for one security package. `packageName` names the
 * package; `credBuffer` is that package's credential blob. The
 * blob's layout should be the one defined by the CredSSP server
 * operating system for the package that produced it. Windows
 * CredSSP servers use authentication packages supplied by
 * Microsoft. Those layouts are product behavior, documented on
 * `credBuffer`.
 *
 * `packageName` is text. Windows encodes a
 * [UNICODE_STRING](https://learn.microsoft.com/en-us/windows/win32/api/ntdef/ns-ntdef-unicode_string)
 * as UTF-16LE with no BOM
 * ([glossary](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/97e4a826-1112-4ab4-8662-cfa58418b4c1)).
 * The specification does not otherwise define a character
 * encoding. `credBuffer` is not text.
 *
 * [MS-CSSP, section 2.2.1.2.3.1](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/173eee44-1a2c-463f-b909-c15db01e68d7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TSRemoteGuardPackageCred ::= SEQUENCE {
 *     packageName    [0] OCTET STRING,
 *     credBuffer    [1] OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class TSRemoteGuardPackageCred {
    /**
     * Name of the security package these credentials are for.
     *
     * [MS-CSSP, section 2.2.1.2.3.1](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/173eee44-1a2c-463f-b909-c15db01e68d7).
     * @public
     * @readonly
     */
    public readonly packageName: OCTET_STRING;
    /**
     * Package-specific credential bytes. The normative text
     * does not define the layout. On Windows
     * ([appendix A, note 22](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/0b458a93-de59-44af-82f1-ebedb585f5c6)):
     *
     * When this value is `TSRemoteGuardCreds.logonCred`, the
     * buffer is a
     * [`KERB_TICKET_LOGON`](https://learn.microsoft.com/en-us/windows/win32/api/ntsecapi/ns-ntsecapi-kerb_ticket_logon).
     * `TicketGrantingTicket` is an ASN.1 `KRB_CRED`
     * ([RFC 4120, section 5.8.1](https://www.rfc-editor.org/rfc/rfc4120#section-5.8.1)).
     * `EncryptionKey` in `KrbCredInfo` is a
     * `KERB_RPC_ENCRYPTION_KEY`
     * ([MS-RDPEAR, section 2.2.1.2.8](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-rdpear/ae2afe50-0dd9-434f-b0c5-0ed88daf2b0e)).
     * `ServiceTicket` is a ticket to the computer account, and
     * its session key encrypts `EncryptedData` in the
     * `KRB_CRED`. Windows clients do not put a user-to-user
     * ticket
     * ([RFC 4120, section 2.9.2](https://www.rfc-editor.org/rfc/rfc4120#section-2.9.2))
     * in `ServiceTicket`. The server does not enforce that.
     *
     * When this value is an element of `supplementalCreds`,
     * the buffer is an `NTLM_REMOTE_SUPPLEMENTAL_CREDENTIAL`:
     *
     * - `Version` is `0xFFFF0002`.
     * - `Flags` has at least one of the bits below set. Every
     *   other bit is zero and is ignored on receipt. In the
     *   appendix diagram the most significant bit is on the
     *   left, so L is the least significant bit:
     *   L (`0x00000001`) means the LM OWF is present;
     *   N (`0x00000002`) means the NT OWF is present;
     *   C (`0x00000008`) means the reserved credential key is
     *   present
     *   ([MS-RDPEAR, section 2.2.1.3.5](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-rdpear/d6f86e0d-5a3b-4efd-b548-4c4a47fa2df8)).
     * - `CredentialKey` is 20 bytes. `CredentialKeyType` must
     *   be 2 (`DomainUserCredKey`). See `reserved4` and
     *   `reserved5` of `MSV1_0_REMOTE_ENCRYPTED_SECRETS`
     *   ([MS-RDPEAR, section 2.2.1.3.6](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-rdpear/e4f507a5-9558-49f9-a85f-036764144378)).
     * - The key is derived from the password. Take the NTOWF
     *   ([MS-NLMP, section 3.3.1](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-nlmp/464551a8-9fc4-428e-b3d3-bc5bfb2e73a5)).
     *   Run PBKDF2
     *   ([RFC 2898, section 5.2](https://www.rfc-editor.org/rfc/rfc2898#section-5.2))
     *   with that NTOWF as the password, the user's SID as a
     *   `UNICODE_STRING` salt, SHA-256, and 10,000 iterations,
     *   producing 32 bytes. Run PBKDF2 once more with that
     *   intermediate key as the password, the same salt, and
     *   SHA-256, producing 16 bytes. The last four bytes of
     *   the 20-byte key are zero.
     * - `reservedsize` is the size of `reserved`. The
     *   specification's `size_is` attribute spells that field
     *   `reservedSize`. `reserved` is the credential bytes
     *   (`reserved6` of the same MS-RDPEAR structure). The
     *   specification gives this as a C structure with a
     *   pointer and does not define a separate octet layout.
     *
     * [MS-CSSP, section 2.2.1.2.3.1](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/173eee44-1a2c-463f-b909-c15db01e68d7).
     * @public
     * @readonly
     */
    public readonly credBuffer: OCTET_STRING;

    constructor (
        packageName: OCTET_STRING,
        credBuffer: OCTET_STRING
    ) {
        this.packageName = packageName;
        this.credBuffer = credBuffer;
    }

    /**
     * @summary Restructures an object into a TSRemoteGuardPackageCred
     * @description
     * 
     * This takes an `object` and converts it to a `TSRemoteGuardPackageCred`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TSRemoteGuardPackageCred`.
     * @returns {TSRemoteGuardPackageCred}
     */
    public static _from_object (_o: { [_K in keyof (TSRemoteGuardPackageCred)]: (TSRemoteGuardPackageCred)[_K] }): TSRemoteGuardPackageCred {
        return new TSRemoteGuardPackageCred(_o.packageName, _o.credBuffer);
    }


}

/**
 * @summary The Leading Root Component Types of TSRemoteGuardPackageCred
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TSRemoteGuardPackageCred: $.ComponentSpec[] = [
    new $.ComponentSpec("packageName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("credBuffer", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TSRemoteGuardPackageCred
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TSRemoteGuardPackageCred: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TSRemoteGuardPackageCred
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TSRemoteGuardPackageCred: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TSRemoteGuardPackageCred: $.ASN1Decoder<TSRemoteGuardPackageCred> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TSRemoteGuardPackageCred
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TSRemoteGuardPackageCred (el: _Element): TSRemoteGuardPackageCred {
    if (!_cached_decoder_for_TSRemoteGuardPackageCred) { _cached_decoder_for_TSRemoteGuardPackageCred = function (el: _Element): TSRemoteGuardPackageCred {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TSRemoteGuardPackageCred contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "packageName";
    sequence[1].name = "credBuffer";
    const packageName: OCTET_STRING = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    const credBuffer: OCTET_STRING = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new TSRemoteGuardPackageCred(
        packageName,
        credBuffer,

    );
}; }
    return _cached_decoder_for_TSRemoteGuardPackageCred(el);
}

let _cached_encoder_for_TSRemoteGuardPackageCred: $.ASN1Encoder<TSRemoteGuardPackageCred> | null = null;

/**
 * @summary Encodes a(n) TSRemoteGuardPackageCred into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSRemoteGuardPackageCred, encoded as an ASN.1 Element.
 */
export
function _encode_TSRemoteGuardPackageCred (value: TSRemoteGuardPackageCred, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TSRemoteGuardPackageCred) { _cached_encoder_for_TSRemoteGuardPackageCred = function (value: TSRemoteGuardPackageCred): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.packageName, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.credBuffer, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TSRemoteGuardPackageCred(value, elGetter);
}


/* eslint-enable */
