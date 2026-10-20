/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMServingNode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMServingNode ::= SEQUENCE {
 *    sGSNName            [0] IMPLICIT OCTET STRING OPTIONAL,
 *    sGSNRealm           [1] IMPLICIT OCTET STRING OPTIONAL,
 *    sGSNNumber          [2] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    mMEName             [3] IMPLICIT OCTET STRING OPTIONAL,
 *    mMERealm            [4] IMPLICIT OCTET STRING OPTIONAL,
 *    mMENumberForMTSMS   [5] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    mSCNumber           [6] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    iPSMGWNumber        [7] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    iPSMGWName          [8] IMPLICIT OCTET STRING OPTIONAL}
 * ```
 * 
 * @class
 */
export
class SMServingNode {
    /**
     * @summary `sGSNName`.
     * @public
     * @readonly
     */
    readonly sGSNName: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sGSNRealm`.
     * @public
     * @readonly
     */
    readonly sGSNRealm: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sGSNNumber`.
     * @public
     * @readonly
     */
    readonly sGSNNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mMEName`.
     * @public
     * @readonly
     */
    readonly mMEName: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mMERealm`.
     * @public
     * @readonly
     */
    readonly mMERealm: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mMENumberForMTSMS`.
     * @public
     * @readonly
     */
    readonly mMENumberForMTSMS: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mSCNumber`.
     * @public
     * @readonly
     */
    readonly mSCNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `iPSMGWNumber`.
     * @public
     * @readonly
     */
    readonly iPSMGWNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `iPSMGWName`.
     * @public
     * @readonly
     */
    readonly iPSMGWName: OPTIONAL<OCTET_STRING>;

    constructor (
        sGSNName: OPTIONAL<OCTET_STRING>,
        sGSNRealm: OPTIONAL<OCTET_STRING>,
        sGSNNumber: OPTIONAL<OCTET_STRING>,
        mMEName: OPTIONAL<OCTET_STRING>,
        mMERealm: OPTIONAL<OCTET_STRING>,
        mMENumberForMTSMS: OPTIONAL<OCTET_STRING>,
        mSCNumber: OPTIONAL<OCTET_STRING>,
        iPSMGWNumber: OPTIONAL<OCTET_STRING>,
        iPSMGWName: OPTIONAL<OCTET_STRING>
    ) {
        this.sGSNName = sGSNName;
        this.sGSNRealm = sGSNRealm;
        this.sGSNNumber = sGSNNumber;
        this.mMEName = mMEName;
        this.mMERealm = mMERealm;
        this.mMENumberForMTSMS = mMENumberForMTSMS;
        this.mSCNumber = mSCNumber;
        this.iPSMGWNumber = iPSMGWNumber;
        this.iPSMGWName = iPSMGWName;
    }

    /**
     * @summary Restructures an object into a SMServingNode
     * @description
     * 
     * This takes an `object` and converts it to a `SMServingNode`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMServingNode`.
     * @returns {SMServingNode}
     */
    public static _from_object (_o: { [_K in keyof (SMServingNode)]: (SMServingNode)[_K] }): SMServingNode {
        return new SMServingNode(_o.sGSNName, _o.sGSNRealm, _o.sGSNNumber, _o.mMEName, _o.mMERealm, _o.mMENumberForMTSMS, _o.mSCNumber, _o.iPSMGWNumber, _o.iPSMGWName);
    }


}

/**
 * @summary The Leading Root Component Types of SMServingNode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMServingNode: $.ComponentSpec[] = [
    new $.ComponentSpec("sGSNName", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sGSNRealm", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sGSNNumber", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mMEName", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("mMERealm", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mMENumberForMTSMS", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("mSCNumber", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("iPSMGWNumber", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("iPSMGWName", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of SMServingNode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMServingNode: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMServingNode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMServingNode: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMServingNode: $.ASN1Decoder<SMServingNode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMServingNode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMServingNode (el: _Element): SMServingNode {
    if (!_cached_decoder_for_SMServingNode) { _cached_decoder_for_SMServingNode = function (el: _Element): SMServingNode {
    let sGSNName: OPTIONAL<OCTET_STRING>;
    let sGSNRealm: OPTIONAL<OCTET_STRING>;
    let sGSNNumber: OPTIONAL<OCTET_STRING>;
    let mMEName: OPTIONAL<OCTET_STRING>;
    let mMERealm: OPTIONAL<OCTET_STRING>;
    let mMENumberForMTSMS: OPTIONAL<OCTET_STRING>;
    let mSCNumber: OPTIONAL<OCTET_STRING>;
    let iPSMGWNumber: OPTIONAL<OCTET_STRING>;
    let iPSMGWName: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "sGSNName": (_el: _Element): void => { sGSNName = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sGSNRealm": (_el: _Element): void => { sGSNRealm = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sGSNNumber": (_el: _Element): void => { sGSNNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mMEName": (_el: _Element): void => { mMEName = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mMERealm": (_el: _Element): void => { mMERealm = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mMENumberForMTSMS": (_el: _Element): void => { mMENumberForMTSMS = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mSCNumber": (_el: _Element): void => { mSCNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "iPSMGWNumber": (_el: _Element): void => { iPSMGWNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "iPSMGWName": (_el: _Element): void => { iPSMGWName = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMServingNode,
        _extension_additions_list_spec_for_SMServingNode,
        _root_component_type_list_2_spec_for_SMServingNode,
        undefined,
    );
    return new SMServingNode(
        sGSNName,
        sGSNRealm,
        sGSNNumber,
        mMEName,
        mMERealm,
        mMENumberForMTSMS,
        mSCNumber,
        iPSMGWNumber,
        iPSMGWName
    );
}; }
    return _cached_decoder_for_SMServingNode(el);
}

let _cached_encoder_for_SMServingNode: $.ASN1Encoder<SMServingNode> | null = null;

/**
 * @summary Encodes a(n) SMServingNode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMServingNode, encoded as an ASN.1 Element.
 */
export
function _encode_SMServingNode (value: SMServingNode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMServingNode) { _cached_encoder_for_SMServingNode = function (value: SMServingNode, elGetter: $.ASN1Encoder<SMServingNode>): _Element {
    const _components: _Element[] = [];
    if (value.sGSNName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.sGSNName, $.BER));
    }
    if (value.sGSNRealm !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.sGSNRealm, $.BER));
    }
    if (value.sGSNNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.sGSNNumber, $.BER));
    }
    if (value.mMEName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.mMEName, $.BER));
    }
    if (value.mMERealm !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.mMERealm, $.BER));
    }
    if (value.mMENumberForMTSMS !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.mMENumberForMTSMS, $.BER));
    }
    if (value.mSCNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.mSCNumber, $.BER));
    }
    if (value.iPSMGWNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.iPSMGWNumber, $.BER));
    }
    if (value.iPSMGWName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.iPSMGWName, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SMServingNode(value, elGetter);
}


/* eslint-enable */
