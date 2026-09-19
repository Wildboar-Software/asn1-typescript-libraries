/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ConnectRequest_PDU_version, _decode_ConnectRequest_PDU_version, _encode_ConnectRequest_PDU_version } from "../RFC1085-PS/ConnectRequest-PDU-version.ta.mjs";
// export { ConnectRequest_PDU_version, ConnectRequest_PDU_version_version_1 /* IMPORTED_LONG_NAMED_INTEGER */, version_1 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ConnectRequest_PDU_version, _encode_ConnectRequest_PDU_version } from "../RFC1085-PS/ConnectRequest-PDU-version.ta.mjs";
import { SessionConnectionIdentifier, _decode_SessionConnectionIdentifier, _encode_SessionConnectionIdentifier } from "../RFC1085-PS/SessionConnectionIdentifier.ta.mjs";
// export { SessionConnectionIdentifier, _decode_SessionConnectionIdentifier, _encode_SessionConnectionIdentifier } from "../RFC1085-PS/SessionConnectionIdentifier.ta.mjs";
import { PresentationSelector, _decode_PresentationSelector, _encode_PresentationSelector } from "../RFC1085-PS/PresentationSelector.ta.mjs";
// export { PresentationSelector, _decode_PresentationSelector, _encode_PresentationSelector } from "../RFC1085-PS/PresentationSelector.ta.mjs";
import { UserData_PDU, _decode_UserData_PDU, _encode_UserData_PDU } from "../RFC1085-PS/UserData-PDU.ta.mjs";
// export { UserData_PDU, _decode_UserData_PDU, _encode_UserData_PDU } from "../RFC1085-PS/UserData-PDU.ta.mjs";


/**
 * @summary ConnectRequest_PDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectRequest-PDU ::= [0] IMPLICIT SEQUENCE {
 *     -- version-1 corresponds to to this memo
 *     version     [0] IMPLICIT INTEGER { version-1(0) },
 *     reference   SessionConnectionIdentifier,
 *     calling     PresentationSelector OPTIONAL,
 *     called      [2] IMPLICIT PresentationSelector OPTIONAL,
 *     -- the ASN for PCI #1
 *     asn         [3] IMPLICIT OBJECT IDENTIFIER,
 *     user-data   UserData-PDU
 * }
 * ```
 * 
 * @class
 */
export
class ConnectRequest_PDU {
    constructor (
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: ConnectRequest_PDU_version,
        /**
         * @summary `reference`.
         * @public
         * @readonly
         */
        readonly reference: SessionConnectionIdentifier,
        /**
         * @summary `calling`.
         * @public
         * @readonly
         */
        readonly calling: OPTIONAL<PresentationSelector>,
        /**
         * @summary `called`.
         * @public
         * @readonly
         */
        readonly called: OPTIONAL<PresentationSelector>,
        /**
         * @summary `asn`.
         * @public
         * @readonly
         */
        readonly asn: OBJECT_IDENTIFIER,
        /**
         * @summary `user_data`.
         * @public
         * @readonly
         */
        readonly user_data: UserData_PDU
    ) {}

    /**
     * @summary Restructures an object into a ConnectRequest_PDU
     * @description
     * 
     * This takes an `object` and converts it to a `ConnectRequest_PDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectRequest_PDU`.
     * @returns {ConnectRequest_PDU}
     */
    public static _from_object (_o: { [_K in keyof (ConnectRequest_PDU)]: (ConnectRequest_PDU)[_K] }): ConnectRequest_PDU {
        return new ConnectRequest_PDU(_o.version, _o.reference, _o.calling, _o.called, _o.asn, _o.user_data);
    }


}

/**
 * @summary The Leading Root Component Types of ConnectRequest_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConnectRequest_PDU: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("reference", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("calling", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("called", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("asn", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("user-data", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of ConnectRequest_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConnectRequest_PDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConnectRequest_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConnectRequest_PDU: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConnectRequest_PDU: $.ASN1Decoder<ConnectRequest_PDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectRequest_PDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectRequest_PDU (el: _Element): ConnectRequest_PDU {
    if (!_cached_decoder_for_ConnectRequest_PDU) { _cached_decoder_for_ConnectRequest_PDU = $._decode_implicit<ConnectRequest_PDU>(() => function (el: _Element): ConnectRequest_PDU {
    let version!: ConnectRequest_PDU_version;
    let reference!: SessionConnectionIdentifier;
    let calling: OPTIONAL<PresentationSelector>;
    let called: OPTIONAL<PresentationSelector>;
    let asn!: OBJECT_IDENTIFIER;
    let user_data!: UserData_PDU;
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = $._decode_implicit<ConnectRequest_PDU_version>(() => _decode_ConnectRequest_PDU_version)(_el); },
        "reference": (_el: _Element): void => { reference = _decode_SessionConnectionIdentifier(_el); },
        "calling": (_el: _Element): void => { calling = _decode_PresentationSelector(_el); },
        "called": (_el: _Element): void => { called = $._decode_implicit<PresentationSelector>(() => _decode_PresentationSelector)(_el); },
        "asn": (_el: _Element): void => { asn = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "user-data": (_el: _Element): void => { user_data = _decode_UserData_PDU(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ConnectRequest_PDU,
        _extension_additions_list_spec_for_ConnectRequest_PDU,
        _root_component_type_list_2_spec_for_ConnectRequest_PDU,
        undefined,
    );
    return new ConnectRequest_PDU(
        version,
        reference,
        calling,
        called,
        asn,
        user_data
    );
}); }
    return _cached_decoder_for_ConnectRequest_PDU(el);
}

let _cached_encoder_for_ConnectRequest_PDU: $.ASN1Encoder<ConnectRequest_PDU> | null = null;

/**
 * @summary Encodes a(n) ConnectRequest_PDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectRequest_PDU, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectRequest_PDU (value: ConnectRequest_PDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectRequest_PDU) { _cached_encoder_for_ConnectRequest_PDU = $._encode_implicit(_TagClass.context, 0, () => function (value: ConnectRequest_PDU, elGetter: $.ASN1Encoder<ConnectRequest_PDU>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ConnectRequest_PDU_version, $.BER)(value.version, $.BER),
            /* REQUIRED   */ _encode_SessionConnectionIdentifier(value.reference, $.BER),
            /* IF_ABSENT  */ ((value.calling === undefined) ? undefined : _encode_PresentationSelector(value.calling, $.BER)),
            /* IF_ABSENT  */ ((value.called === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_PresentationSelector, $.BER)(value.called, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeObjectIdentifier, $.BER)(value.asn, $.BER),
            /* REQUIRED   */ _encode_UserData_PDU(value.user_data, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ConnectRequest_PDU(value, elGetter);
}


/* eslint-enable */
