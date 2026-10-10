/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TSRemoteGuardPackageCred, _decode_TSRemoteGuardPackageCred, _encode_TSRemoteGuardPackageCred } from "../CredSSP/TSRemoteGuardPackageCred.ta.mjs";


/**
 * @summary TSRemoteGuardCreds
 * @description
 *
 * Remote Credential Guard credentials. Carried in
 * {@link TSCredentials} when `credType` is 6. `logonCred` is
 * passed to the Negotiate package, which passes it to the
 * default authentication package. `supplementalCreds` are for
 * other security packages. Each buffer's layout depends on the
 * package that produced it; Windows layouts are on
 * {@link TSRemoteGuardPackageCred.credBuffer}.
 *
 * After these credentials are delegated, the TLS channel stays
 * up for redirected authentication
 * ([MS-RDPEAR](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-rdpear/a32e17ec-5869-4fad-bdae-d35f342fcb6f)).
 *
 * Windows supports this structure only on Windows 10 version
 * 1607 and later clients, and on Windows Server 2016 and later.
 *
 * [MS-CSSP, section 2.2.1.2.3](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/7ef8229c-44ea-4c1b-867f-00369b882b38).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TSRemoteGuardCreds ::= SEQUENCE {
 *     logonCred        [0] TSRemoteGuardPackageCred,
 *     supplementalCreds    [1] SEQUENCE OF TSRemoteGuardPackageCred OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TSRemoteGuardCreds {
    constructor (
        /**
         * Logon credential for the user. On Windows the buffer is
         * a `KERB_TICKET_LOGON`. See
         * {@link TSRemoteGuardPackageCred.credBuffer}.
         *
         * [MS-CSSP, section 2.2.1.2.3](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/7ef8229c-44ea-4c1b-867f-00369b882b38).
         * @public
         * @readonly
         */
        readonly logonCred: TSRemoteGuardPackageCred,
        /**
         * Supplemental credentials for security packages other
         * than the logon package. Optional. On Windows each buffer
         * is an `NTLM_REMOTE_SUPPLEMENTAL_CREDENTIAL`. See
         * {@link TSRemoteGuardPackageCred.credBuffer}.
         *
         * [MS-CSSP, section 2.2.1.2.3](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/7ef8229c-44ea-4c1b-867f-00369b882b38).
         * @public
         * @readonly
         */
        readonly supplementalCreds: OPTIONAL<TSRemoteGuardPackageCred[]>
    ) {}

    /**
     * @summary Restructures an object into a TSRemoteGuardCreds
     * @description
     * 
     * This takes an `object` and converts it to a `TSRemoteGuardCreds`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TSRemoteGuardCreds`.
     * @returns {TSRemoteGuardCreds}
     */
    public static _from_object (_o: { [_K in keyof (TSRemoteGuardCreds)]: (TSRemoteGuardCreds)[_K] }): TSRemoteGuardCreds {
        return new TSRemoteGuardCreds(_o.logonCred, _o.supplementalCreds);
    }


}

/**
 * @summary The Leading Root Component Types of TSRemoteGuardCreds
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TSRemoteGuardCreds: $.ComponentSpec[] = [
    new $.ComponentSpec("logonCred", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("supplementalCreds", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TSRemoteGuardCreds
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TSRemoteGuardCreds: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TSRemoteGuardCreds
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TSRemoteGuardCreds: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TSRemoteGuardCreds: $.ASN1Decoder<TSRemoteGuardCreds> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TSRemoteGuardCreds
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TSRemoteGuardCreds (el: _Element): TSRemoteGuardCreds {
    if (!_cached_decoder_for_TSRemoteGuardCreds) { _cached_decoder_for_TSRemoteGuardCreds = function (el: _Element): TSRemoteGuardCreds {
    let logonCred!: TSRemoteGuardPackageCred;
    let supplementalCreds: OPTIONAL<TSRemoteGuardPackageCred[]>;
    const callbacks: $.DecodingMap = {
        "logonCred": (_el: _Element): void => { logonCred = $._decode_explicit<TSRemoteGuardPackageCred>(() => _decode_TSRemoteGuardPackageCred)(_el); },
        "supplementalCreds": (_el: _Element): void => { supplementalCreds = $._decode_explicit<TSRemoteGuardPackageCred[]>(() => $._decodeSequenceOf<TSRemoteGuardPackageCred>(() => _decode_TSRemoteGuardPackageCred))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TSRemoteGuardCreds,
        _extension_additions_list_spec_for_TSRemoteGuardCreds,
        _root_component_type_list_2_spec_for_TSRemoteGuardCreds,
        undefined,
    );
    return new TSRemoteGuardCreds(
        logonCred,
        supplementalCreds
    );
}; }
    return _cached_decoder_for_TSRemoteGuardCreds(el);
}

let _cached_encoder_for_TSRemoteGuardCreds: $.ASN1Encoder<TSRemoteGuardCreds> | null = null;

/**
 * @summary Encodes a(n) TSRemoteGuardCreds into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSRemoteGuardCreds, encoded as an ASN.1 Element.
 */
export
function _encode_TSRemoteGuardCreds (value: TSRemoteGuardCreds, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TSRemoteGuardCreds) { _cached_encoder_for_TSRemoteGuardCreds = function (value: TSRemoteGuardCreds): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_TSRemoteGuardPackageCred, $.BER)(value.logonCred, $.BER),
            /* IF_ABSENT  */ ((value.supplementalCreds === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => $._encodeSequenceOf<TSRemoteGuardPackageCred>(() => _encode_TSRemoteGuardPackageCred, $.BER), $.BER)(value.supplementalCreds, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TSRemoteGuardCreds(value, elGetter);
}


/* eslint-enable */
