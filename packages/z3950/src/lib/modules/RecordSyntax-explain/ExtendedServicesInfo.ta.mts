/* eslint-disable */
import {
    BOOLEAN,
    EXTERNAL,
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { ExtendedServicesInfo_waitAction, _decode_ExtendedServicesInfo_waitAction, _encode_ExtendedServicesInfo_waitAction } from "../RecordSyntax-explain/ExtendedServicesInfo-waitAction.ta.mjs";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";


/**
 * @summary ExtendedServicesInfo
 * @description
 * 
 * One extended service. One record per service the server supports. Search
 * ExplainCategory `ExtendedServicesInfo` with the service's object identifier
 * (Use ExtendedServiceOID). ATR.1 Table 2 spells that category term
 * extendedServicesInfo; matching is case-insensitive. Element set `description`
 * returns the brief elements plus description. `specificExplain` returns those
 * plus the service-specific Explain data. `asn` returns every element except
 * specificExplain. ANSI/NISO Z39.50-2003 §3.2.10.1.1, §3.2.10.3.8; REC.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedServicesInfo ::= SEQUENCE {
 *     commonInfo          [0] IMPLICIT CommonInfo OPTIONAL,
 *     -- Key elements follow:
 *     type                [1] IMPLICIT OBJECT IDENTIFIER,
 *     -- Non-key brief elements follow:
 *     name                [2] IMPLICIT InternationalString OPTIONAL,
 *     -- Should be supplied if privateType is 'true'
 *     privateType         [3] IMPLICIT BOOLEAN,
 *     restrictionsApply   [5] IMPLICIT BOOLEAN, -- if 'true' see 'description'
 *     feeApply            [6] IMPLICIT BOOLEAN, -- if 'true' see 'description'
 *     available           [7] IMPLICIT BOOLEAN,
 *     retentionSupported  [8] IMPLICIT BOOLEAN,
 *     waitAction          [9] IMPLICIT INTEGER {
 *         waitSupported       (1),
 *         waitAlways          (2),
 *         waitNotSupported    (3),
 *         depends             (4),
 *         notSaying           (5)
 *     },
 *     -- Non-brief elements follow:
 *     -- To get brief plus 'description' use esn 'description'
 *     description         [10] IMPLICIT HumanString OPTIONAL,
 *     -- To get above elements and 'specificExplain' use esn 'specificExplain'
 *     specificExplain     [11] IMPLICIT EXTERNAL OPTIONAL,
 *     -- Use oid of specific ES, and select choice [3] 'explain'.
 *     -- Format to be developed in conjunction with the specific ES definition.
 *     -- To get all elements except 'specificExplain', use esn 'asn'
 *     esASN               [12] IMPLICIT InternationalString OPTIONAL
 *     -- The ASN.1 for this ES
 * }
 * ```
 * 
 * @class
 */
export
class ExtendedServicesInfo {
    /**
     * @summary `commonInfo`.
     * @description
     * Dates, language, and other information about this Explain record.
     * otherInfo is omitted from element set `B`. REC.1 Comment 1.
     * @public
     * @readonly
     */
    readonly commonInfo: OPTIONAL<CommonInfo>;
    /**
     * @summary `type_`.
     * @description
     * Brief. Key. Object identifier of the extended service. Search with Use
     * ExtendedServiceOID. For version 2, prefer the oid as a dotted character
     * string; for version 3, as an OBJECT IDENTIFIER. ATR.1 note 4; ANSI/NISO
     * Z39.50-2003 §3.2.10.3.8.
     * @public
     * @readonly
     */
    readonly type_: OBJECT_IDENTIFIER;
    /**
     * @summary `name`.
     * @description
     * Brief. Name by which the extended service is known. Should be supplied
     * when the service is private. REC.1; ANSI/NISO Z39.50-2003 §3.2.10.3.8.
     * @public
     * @readonly
     */
    readonly name: OPTIONAL<InternationalString>;
    /**
     * @summary `privateType`.
     * @description
     * Brief. Whether this is a private extended service. ANSI/NISO Z39.50-2003
     * §3.2.10.3.8.
     * @public
     * @readonly
     */
    readonly privateType: BOOLEAN;
    /**
     * @summary `restrictionsApply`.
     * @description
     * Brief. Whether restrictions apply. If so, see description. REC.1;
     * ANSI/NISO Z39.50-2003 §3.2.10.3.8.
     * @public
     * @readonly
     */
    readonly restrictionsApply: BOOLEAN;
    /**
     * @summary `feeApply`.
     * @description
     * Brief. Whether a fee applies. If so, see description. REC.1; ANSI/NISO
     * Z39.50-2003 §3.2.10.3.8.
     * @public
     * @readonly
     */
    readonly feeApply: BOOLEAN;
    /**
     * @summary `available`.
     * @description
     * Brief. Whether the service is available. ANSI/NISO Z39.50-2003
     * §3.2.10.3.8.
     * @public
     * @readonly
     */
    readonly available: BOOLEAN;
    /**
     * @summary `retentionSupported`.
     * @description
     * Brief. Whether retention is supported. ANSI/NISO Z39.50-2003 §3.2.10.3.8.
     * Retention-time on an extended-service request is the period after which
     * the server may delete the task package (§3.2.9.1.5). This flag is not
     * defined more precisely than the category prose.
     * @public
     * @readonly
     */
    readonly retentionSupported: BOOLEAN;
    /**
     * @summary `waitAction`.
     * @description
     * Brief. What level of wait-action is supported. The five named levels are
     * not the four Wait-action values on an extended-service request, and the
     * standard does not map one list onto the other. ANSI/NISO Z39.50-2003
     * §3.2.10.3.8, §3.2.9.1.13.
     * @public
     * @readonly
     */
    readonly waitAction: ExtendedServicesInfo_waitAction;
    /**
     * @summary `description`.
     * @description
     * Non-brief. Human-readable description. Element set `description` returns
     * the brief elements plus this. If restrictions or a fee apply, this is
     * where they are described. REC.1; ANSI/NISO Z39.50-2003 §3.2.10.3.8.
     * @public
     * @readonly
     */
    readonly description: OPTIONAL<HumanString>;
    /**
     * @summary `specificExplain`.
     * @description
     * Non-brief. Explain elements defined by this extended service. Use the
     * service's object identifier and select choice explain. The format is
     * developed with that service's definition. Element set `specificExplain`
     * returns the preceding elements plus this. REC.1; ANSI/NISO Z39.50-2003
     * §3.2.10.3.8.
     * @public
     * @readonly
     */
    readonly specificExplain: OPTIONAL<EXTERNAL>;
    /**
     * @summary `esASN`.
     * @description
     * Non-brief. ASN.1 module for this extended service's Explain definition.
     * Element set `asn` returns every element except specificExplain. REC.1;
     * ANSI/NISO Z39.50-2003 §3.2.10.3.8.
     * @public
     * @readonly
     */
    readonly esASN: OPTIONAL<InternationalString>;

    constructor (
        commonInfo: OPTIONAL<CommonInfo>,
        type_: OBJECT_IDENTIFIER,
        name: OPTIONAL<InternationalString>,
        privateType: BOOLEAN,
        restrictionsApply: BOOLEAN,
        feeApply: BOOLEAN,
        available: BOOLEAN,
        retentionSupported: BOOLEAN,
        waitAction: ExtendedServicesInfo_waitAction,
        description: OPTIONAL<HumanString>,
        specificExplain: OPTIONAL<EXTERNAL>,
        esASN: OPTIONAL<InternationalString>
    ) {
        this.commonInfo = commonInfo;
        this.type_ = type_;
        this.name = name;
        this.privateType = privateType;
        this.restrictionsApply = restrictionsApply;
        this.feeApply = feeApply;
        this.available = available;
        this.retentionSupported = retentionSupported;
        this.waitAction = waitAction;
        this.description = description;
        this.specificExplain = specificExplain;
        this.esASN = esASN;
    }

    /**
     * @summary Restructures an object into a ExtendedServicesInfo
     * @description
     * 
     * This takes an `object` and converts it to a `ExtendedServicesInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtendedServicesInfo`.
     * @returns {ExtendedServicesInfo}
     */
    public static _from_object (_o: { [_K in keyof (ExtendedServicesInfo)]: (ExtendedServicesInfo)[_K] }): ExtendedServicesInfo {
        return new ExtendedServicesInfo(_o.commonInfo, _o.type_, _o.name, _o.privateType, _o.restrictionsApply, _o.feeApply, _o.available, _o.retentionSupported, _o.waitAction, _o.description, _o.specificExplain, _o.esASN);
    }


}

/**
 * @summary The Leading Root Component Types of ExtendedServicesInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExtendedServicesInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("commonInfo", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("name", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("privateType", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("restrictionsApply", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("feeApply", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("available", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("retentionSupported", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("waitAction", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("specificExplain", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("esASN", true, $.hasTag(_TagClass.context, 12))
];

/**
 * @summary The Trailing Root Component Types of ExtendedServicesInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExtendedServicesInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExtendedServicesInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExtendedServicesInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExtendedServicesInfo: $.ASN1Decoder<ExtendedServicesInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedServicesInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtendedServicesInfo (el: _Element): ExtendedServicesInfo {
    if (!_cached_decoder_for_ExtendedServicesInfo) { _cached_decoder_for_ExtendedServicesInfo = function (el: _Element): ExtendedServicesInfo {
    let commonInfo: OPTIONAL<CommonInfo>;
    let type_!: OBJECT_IDENTIFIER;
    let name: OPTIONAL<InternationalString>;
    let privateType!: BOOLEAN;
    let restrictionsApply!: BOOLEAN;
    let feeApply!: BOOLEAN;
    let available!: BOOLEAN;
    let retentionSupported!: BOOLEAN;
    let waitAction!: ExtendedServicesInfo_waitAction;
    let description: OPTIONAL<HumanString>;
    let specificExplain: OPTIONAL<EXTERNAL>;
    let esASN: OPTIONAL<InternationalString>;
    const callbacks: $.DecodingMap = {
        "commonInfo": (_el: _Element): void => { commonInfo = $._decode_implicit<CommonInfo>(() => _decode_CommonInfo)(_el); },
        "type": (_el: _Element): void => { type_ = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "name": (_el: _Element): void => { name = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "privateType": (_el: _Element): void => { privateType = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "restrictionsApply": (_el: _Element): void => { restrictionsApply = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "feeApply": (_el: _Element): void => { feeApply = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "available": (_el: _Element): void => { available = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "retentionSupported": (_el: _Element): void => { retentionSupported = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "waitAction": (_el: _Element): void => { waitAction = $._decode_implicit<ExtendedServicesInfo_waitAction>(() => _decode_ExtendedServicesInfo_waitAction)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "specificExplain": (_el: _Element): void => { specificExplain = $._decode_implicit<EXTERNAL>(() => $._decodeExternal)(_el); },
        "esASN": (_el: _Element): void => { esASN = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ExtendedServicesInfo,
        _extension_additions_list_spec_for_ExtendedServicesInfo,
        _root_component_type_list_2_spec_for_ExtendedServicesInfo,
        undefined,
    );
    return new ExtendedServicesInfo(
        commonInfo,
        type_,
        name,
        privateType,
        restrictionsApply,
        feeApply,
        available,
        retentionSupported,
        waitAction,
        description,
        specificExplain,
        esASN
    );
}; }
    return _cached_decoder_for_ExtendedServicesInfo(el);
}

let _cached_encoder_for_ExtendedServicesInfo: $.ASN1Encoder<ExtendedServicesInfo> | null = null;

/**
 * @summary Encodes a(n) ExtendedServicesInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedServicesInfo, encoded as an ASN.1 Element.
 */
export
function _encode_ExtendedServicesInfo (value: ExtendedServicesInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtendedServicesInfo) { _cached_encoder_for_ExtendedServicesInfo = function (value: ExtendedServicesInfo, elGetter: $.ASN1Encoder<ExtendedServicesInfo>): _Element {
    const _components: _Element[] = new Array(12);
    let _components_i = 0;
    if (value.commonInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_CommonInfo, $.BER)(value.commonInfo, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.type_, $.BER);
    if (value.name !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.name, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.privateType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.restrictionsApply, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.feeApply, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.available, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeBoolean, $.BER)(value.retentionSupported, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => _encode_ExtendedServicesInfo_waitAction, $.BER)(value.waitAction, $.BER);
    if (value.description !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_HumanString, $.BER)(value.description, $.BER);
    }
    if (value.specificExplain !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeExternal, $.BER)(value.specificExplain, $.BER);
    }
    if (value.esASN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_InternationalString, $.BER)(value.esASN, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ExtendedServicesInfo(value, elGetter);
}


/* eslint-enable */
