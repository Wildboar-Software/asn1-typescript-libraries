/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DomainInfo, _decode_DomainInfo, _encode_DomainInfo } from "../DistributedOperations/DomainInfo.ta.mjs";
// export { DomainInfo, _decode_DomainInfo, _encode_DomainInfo } from "../DistributedOperations/DomainInfo.ta.mjs";
import { CrossReference, _decode_CrossReference, _encode_CrossReference } from "../DistributedOperations/CrossReference.ta.mjs";
// export { CrossReference, _decode_CrossReference, _encode_CrossReference } from "../DistributedOperations/CrossReference.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { Exclusions, _decode_Exclusions, _encode_Exclusions } from "../DistributedOperations/Exclusions.ta.mjs";
// export { Exclusions, _decode_Exclusions, _encode_Exclusions } from "../DistributedOperations/Exclusions.ta.mjs";


/**
 * @summary ChainingResults
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChainingResults ::= SET {
 *   info                [0]  DomainInfo OPTIONAL,
 *   crossReferences     [1]  SEQUENCE (SIZE (1..MAX)) OF CrossReference OPTIONAL,
 *   securityParameters  [2]  SecurityParameters DEFAULT {},
 *   alreadySearched     [3]  Exclusions OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ChainingResults {
    /**
     * @summary `info`.
     * @public
     * @readonly
     */
    readonly info: OPTIONAL<DomainInfo>;
    /**
     * @summary `crossReferences`.
     * @public
     * @readonly
     */
    readonly crossReferences: OPTIONAL<CrossReference[]>;
    /**
     * @summary `securityParameters`.
     * @public
     * @readonly
     */
    readonly securityParameters: OPTIONAL<SecurityParameters>;
    /**
     * @summary `alreadySearched`.
     * @public
     * @readonly
     */
    readonly alreadySearched: OPTIONAL<Exclusions>;

    constructor (
        info: OPTIONAL<DomainInfo>,
        crossReferences: OPTIONAL<CrossReference[]>,
        securityParameters: OPTIONAL<SecurityParameters>,
        alreadySearched: OPTIONAL<Exclusions>
    ) {
        this.info = info;
        this.crossReferences = crossReferences;
        this.securityParameters = securityParameters;
        this.alreadySearched = alreadySearched;
    }

    /**
     * @summary Restructures an object into a ChainingResults
     * @description
     * 
     * This takes an `object` and converts it to a `ChainingResults`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChainingResults`.
     * @returns {ChainingResults}
     */
    public static _from_object (_o: { [_K in keyof (ChainingResults)]: (ChainingResults)[_K] }): ChainingResults {
        return new ChainingResults(_o.info, _o.crossReferences, _o.securityParameters, _o.alreadySearched);
    }

    /**
     * @summary Getter that returns the default value for `securityParameters`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_securityParameters () { return SecurityParameters._from_object({  }); }
}

/**
 * @summary The Leading Root Component Types of ChainingResults
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChainingResults: $.ComponentSpec[] = [
    new $.ComponentSpec("info", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("crossReferences", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("alreadySearched", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ChainingResults
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChainingResults: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChainingResults
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChainingResults: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChainingResults: $.ASN1Decoder<ChainingResults> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChainingResults
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChainingResults (el: _Element): ChainingResults {
    if (!_cached_decoder_for_ChainingResults) { _cached_decoder_for_ChainingResults = function (el: _Element): ChainingResults {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let info: OPTIONAL<DomainInfo>;
    let crossReferences: OPTIONAL<CrossReference[]>;
    let securityParameters: OPTIONAL<SecurityParameters> = ChainingResults._default_value_for_securityParameters;
    let alreadySearched: OPTIONAL<Exclusions>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "info": (_el: _Element): void => { info = $._decode_explicit<DomainInfo>(() => _decode_DomainInfo)(_el); },
        "crossReferences": (_el: _Element): void => { crossReferences = $._decode_explicit<CrossReference[]>(() => $._decodeSequenceOf<CrossReference>(() => _decode_CrossReference))(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_explicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "alreadySearched": (_el: _Element): void => { alreadySearched = $._decode_explicit<Exclusions>(() => _decode_Exclusions)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ChainingResults,
        _extension_additions_list_spec_for_ChainingResults,
        _root_component_type_list_2_spec_for_ChainingResults,
        undefined,
    );
    return new ChainingResults( /* SET_CONSTRUCTOR_CALL */
        info,
        crossReferences,
        securityParameters,
        alreadySearched
    );
}; }
    return _cached_decoder_for_ChainingResults(el);
}

let _cached_encoder_for_ChainingResults: $.ASN1Encoder<ChainingResults> | null = null;

/**
 * @summary Encodes a(n) ChainingResults into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChainingResults, encoded as an ASN.1 Element.
 */
export
function _encode_ChainingResults (value: ChainingResults, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChainingResults) { _cached_encoder_for_ChainingResults = function (value: ChainingResults, elGetter: $.ASN1Encoder<ChainingResults>): _Element {
    const _components: _Element[] = [];
    if (value.info !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_DomainInfo, $.BER)(value.info, $.BER));
    }
    if (value.crossReferences !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => $._encodeSequenceOf<CrossReference>(() => _encode_CrossReference, $.BER), $.BER)(value.crossReferences, $.BER));
    }
    if (value.securityParameters !== undefined && !$.deepEq(value.securityParameters, ChainingResults._default_value_for_securityParameters)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 2, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER));
    }
    if (value.alreadySearched !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_Exclusions, $.BER)(value.alreadySearched, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_ChainingResults(value, elGetter);
}


/* eslint-enable */
